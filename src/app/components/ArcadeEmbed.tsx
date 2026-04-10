"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/base/buttons/button";
import { Play } from "@untitledui/icons";

export default function ArcadeEmbed() {
  const arcadeIframeRef = useRef<HTMLIFrameElement>(null);

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

  return (
    <>
      <Button color="secondary" size="xl" onClick={openArcade} iconLeading={<Play data-icon />}>
        Voir la démo (60 sec)
      </Button>
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
