"use client";

import { useEffect, useRef, useState } from "react";

const PROSHARE_ORIGIN = "https://www.proshareapp.com";
const PROSHARE_SOURCE = "proshare-pqrs-embed";

export default function PqrsStatusForm() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (event.origin !== PROSHARE_ORIGIN) return;
      if (!event.data || typeof event.data !== "object") return;

      const message = event.data as { source?: unknown; type?: unknown; height?: unknown };
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow) return;
      if (message.source !== PROSHARE_SOURCE || message.type !== "resize") return;

      const height = Number(message.height);
      if (Number.isFinite(height) && height > 0) frame.style.height = `${height}px`;
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <div className="pqrs-status-embed-wrap" aria-busy={!loaded}>{!loaded && <p className="pqrs-status-loading">Cargando estado de la PQR…</p>}<iframe ref={frameRef} onLoad={() => setLoaded(true)} id="proshare-pqrs-status-embed" src="https://www.proshareapp.com/es/embed/@veesipp/estado-pqrs" title="Estado PQRS" loading="eager" style={{ width: "100%", border: 0, minHeight: "420px" }} referrerPolicy="strict-origin-when-cross-origin" /></div>;
}
