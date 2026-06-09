"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { Play, XClose } from "@untitledui/icons";
import { sendToWebhook } from "@/utils/webhook";
import { trackArcadeEmailSubmit, trackEngagedDemoClick } from "@/lib/track";

const DEFAULT_URL =
  "https://demo.arcade.software/QzTgQJRB9Th4HQecBgd2?embed&embed_mobile=modal&embed_desktop=modal&show_copy_link=true";
const DEFAULT_TITLE = "Créer un parcours de formation à partir d'un référentiel RNCP";
const DEFAULT_BUTTON_LABEL = "Voir la démo (60 sec)";
const DEFAULT_GATE_TITLE = "Voir la démo en 60 secondes";
const DEFAULT_GATE_SUBTITLE =
  "Entrez votre email professionnel pour accéder à la démo interactive.";
const DEFAULT_GATE_PLACEHOLDER = "vous@organisme.fr";
const DEFAULT_GATE_BUTTON = "Accéder à la démo";
const DEFAULT_GATE_FOOTNOTE = "Pas de spam. Juste la démo.";

export type ArcadeEmbedProps = {
  url?: string;
  title?: string;
  buttonLabel?: string;
  gateTitle?: string;
  gateSubtitle?: string;
  gatePlaceholder?: string;
  gateButton?: string;
  gateFootnote?: string;
};

export default function ArcadeEmbed({
  url = DEFAULT_URL,
  title = DEFAULT_TITLE,
  buttonLabel = DEFAULT_BUTTON_LABEL,
  gateTitle = DEFAULT_GATE_TITLE,
  gateSubtitle = DEFAULT_GATE_SUBTITLE,
  gatePlaceholder = DEFAULT_GATE_PLACEHOLDER,
  gateButton = DEFAULT_GATE_BUTTON,
  gateFootnote = DEFAULT_GATE_FOOTNOTE,
}: ArcadeEmbedProps = {}) {
  const arcadeIframeRef = useRef<HTMLIFrameElement>(null);
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);
  const [pendingOpen, setPendingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("syllabis_demo_email");
    if (saved) setUnlocked(true);
  }, []);

  // Workaround Arcade : pré-mount silencieux 2s post-mount.
  // Arcade.software a un bug d'hydratation React #418 dans son embed
  // (https://demo.arcade.software/ tourne sur Vercel et plante au premier
  // mount). Si on attend que l'utilisateur clique pour mount l'iframe, leur
  // React crashe et ne nous envoie jamais le message 'arcade-init' → la
  // modale ne s'ouvre pas au 1er clic. En pré-mountant en background 2s
  // après la page, Arcade a le temps d'init + se régénérer avant l'action
  // utilisateur. L'iframe reste invisible (height=0) jusqu'au clic.
  useEffect(() => {
    if (iframeMounted) return;
    const t = setTimeout(() => {
      setIframeMounted(true);
    }, 2000);
    return () => clearTimeout(t);
  }, [iframeMounted]);

  useEffect(() => {
    if (!iframeMounted) return;

    function onArcadeIframeMessage(e: MessageEvent) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;

      const arcadeIframe = arcadeIframeRef.current;
      if (!arcadeIframe || !arcadeIframe.contentWindow) return;

      if (e.data.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage({ event: "register-popout-handler" }, "*");
        if (pendingOpen) {
          arcadeIframe.contentWindow.postMessage({ event: "request-popout-open" }, "*");
          setPendingOpen(false);
        }
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
  }, [iframeMounted, pendingOpen]);

  function openArcade() {
    if (!iframeMounted) {
      // Fix React #418 (hydration mismatch) : si l'utilisateur clique très
      // tôt avant que l'hydratation soit terminée, un setState synchrone
      // déclenche un re-render pendant une frontière hydratée → erreur.
      // startTransition défère le setState en update non-urgent, laissant
      // l'hydratation se terminer avant d'appliquer le changement.
      startTransition(() => {
        setIframeMounted(true);
        setPendingOpen(true);
      });
      return;
    }
    const arcadeIframe = arcadeIframeRef.current;
    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage({ event: "request-popout-open" }, "*");
    }
  }

  function handleClick() {
    trackEngagedDemoClick({ page: pathname || undefined });
    // GATE EMAIL DÉSACTIVÉ — le clic ouvre directement l'Arcade sans collecter
    // d'email (cf. demande Victor 2026-05-21 : bug Arcade→Twenty + friction UX).
    // Code gate (showGate / handleSubmit / modale email) conservé ci-dessous
    // pour réactivation future. Pour ré-activer : restaurer la condition
    //   if (unlocked) openArcade() else setShowGate(true)
    openArcade();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    localStorage.setItem("syllabis_demo_email", email);
    setUnlocked(true);
    setShowGate(false);
    openArcade();
    // 1) Twenty CRM via /api/leads — crée Person + Opportunity (stage=NEW).
    //    Le backend dérive prénom/nom depuis l'email si absent.
    //    Fire-and-forget : un échec ne doit pas bloquer l'ouverture de la démo.
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "demo",
        email,
        tracking: { sourcePage: "arcade-gate" + (pathname ? ":" + pathname : "") },
      }),
    }).catch(() => {});
    // 2) Make.com (compat existante — scénarios n8n/Slack/etc.). À couper plus
    //    tard si plus utile, /api/leads est désormais source de vérité CRM.
    sendToWebhook({
      source: "arcade-gate",
      timestamp: new Date().toISOString(),
      page: pathname,
      data: { email },
    });
    trackArcadeEmailSubmit({ page: pathname || undefined });
  }

  return (
    <>
      <Button color="secondary" size="xl" onClick={handleClick} iconLeading={<Play data-icon />}>
        {buttonLabel}
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
                {gateTitle}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {gateSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={gatePlaceholder}
                required
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
              />
              <Button color="primary" size="lg" className="w-full" type="submit">
                {gateButton}
              </Button>
            </form>

            <p className="mt-4 text-center text-xs text-neutral-400">
              {gateFootnote}
            </p>
          </div>
        </div>
      )}

      {iframeMounted && (
        <iframe
          ref={arcadeIframeRef}
          src={url}
          title={title}
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          allow="clipboard-write"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 0, colorScheme: "light" }}
        />
      )}
    </>
  );
}
