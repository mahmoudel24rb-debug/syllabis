"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { Play, XClose } from "@untitledui/icons";
import { sendToWebhook } from "@/utils/webhook";

export default function ArcadeEmbed() {
  const arcadeIframeRef = useRef<HTMLIFrameElement>(null);
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("syllabis_demo_email");
    if (saved) setUnlocked(true);
  }, []);

  useEffect(() => {
    function onArcadeIframeMessage(e: MessageEvent) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;

      const arcadeIframe = arcadeIframeRef.current;
      if (!arcadeIframe || !arcadeIframe.contentWindow) return;

      if (e.data.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage({ event: "register-popout-handler" }, "*");
      }

      if (e.data.event === "arcade-popout-open") {
        arcadeIframe.style.height = "100%";
        arcadeIframe.style.zIndex = "9999999";
      }

      if (e.data.event === "arcade-popout-close") {
        arcadeIframe.style.height = "0";
        arcadeIframe.style.zIndex = "auto";
      }
    }

    window.addEventListener("message", onArcadeIframeMessage);

    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage({ event: "register-popout-handler" }, "*");
    }

    return () => {
      if (arcadeIframe && arcadeIframe.contentWindow) {
        arcadeIframe.contentWindow.postMessage({ event: "unregister-popout-handler" }, "*");
      }
      window.removeEventListener("message", onArcadeIframeMessage);
    };
  }, []);

  function openArcade() {
    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage({ event: "request-popout-open" }, "*");
    }
  }

  function handleClick() {
    if (unlocked) {
      openArcade();
    } else {
      setShowGate(true);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    localStorage.setItem("syllabis_demo_email", email);
    setUnlocked(true);
    setShowGate(false);
    openArcade();
    sendToWebhook({
      source: "arcade-gate",
      timestamp: new Date().toISOString(),
      page: pathname,
      data: { email },
    });
  }

  return (
    <>
      <Button color="secondary" size="xl" onClick={handleClick} iconLeading={<Play data-icon />}>
        Voir la démo (60 sec)
      </Button>

      {/* Email gate modal */}
      {showGate && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowGate(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGate(false)}
              className="absolute top-4 right-4 flex items-center justify-center size-8 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <XClose className="size-4 text-neutral-500" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Voir la démo en 60 secondes
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Entrez votre email professionnel pour accéder à la démo interactive.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@organisme.fr"
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
              />
              <Button color="primary" size="lg" className="w-full" type="submit">
                Accéder à la démo
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-neutral-400">
              Pas de spam. Juste la démo.
            </p>
          </div>
        </div>
      )}

      <iframe
        ref={arcadeIframeRef}
        src="https://demo.arcade.software/5A1mzdGUlRlcXFp6pRp0?embed&embed_custom&show_copy_link=true"
        title="Créer et structurer un parcours de formation à partir d'un référentiel PDF"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 0, colorScheme: "light" }}
      />
    </>
  );
}
