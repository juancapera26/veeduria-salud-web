"use client";

import { useEffect, useRef, useState } from "react";

const PROSHARE_ORIGIN = "https://www.proshareapp.com";
const PROSHARE_SOURCE = "proshare-pqrs-embed";

type Confirmation = {
  radicado: string | null;
  response: string | null;
};

function getPayloadValue(payload: Record<string, unknown>, keys: string[]) {
  const nested = payload.data && typeof payload.data === "object" ? payload.data as Record<string, unknown> : null;
  for (const key of keys) {
    if (payload[key] !== undefined && payload[key] !== null && payload[key] !== "") return payload[key];
    if (nested?.[key] !== undefined && nested[key] !== null && nested[key] !== "") return nested[key];
  }
  return null;
}

function formatValue(value: unknown): string | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "string" || typeof value === "number") return String(value);
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return null;
  }
}

function getConfirmation(data: unknown): Confirmation {
  const payload = data as Record<string, unknown>;
  return {
    radicado: formatValue(getPayloadValue(payload, ["radicado", "radicationNumber", "radicadoNumber", "reference", "caseNumber", "ticket"])),
    response: formatValue(getPayloadValue(payload, ["response", "respuesta", "message", "detail", "confirmation"])),
  };
}

export default function PqrsForm() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const [frameKey, setFrameKey] = useState(0);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (event.origin !== PROSHARE_ORIGIN) return;
      if (!event.data || typeof event.data !== "object") return;

      const message = event.data as { source?: unknown; type?: unknown; status?: unknown; height?: unknown };
      const frame = frameRef.current;
      if (!frame || event.source !== frame.contentWindow || message.source !== PROSHARE_SOURCE) return;

      if (message.type === "resize") {
        const height = Number(message.height);
        if (Number.isFinite(height) && height > 0) frame.style.height = `${height}px`;
        return;
      }

      if (message.type === "submitted" && message.status === "success") {
        setConfirmation(getConfirmation(event.data));
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const closeConfirmation = () => {
    setConfirmation(null);
    setFrameKey((current) => current + 1);
  };

  if (confirmation) {
    return <section className="pqrs-confirmation" role="status" aria-live="polite"><button className="pqrs-confirmation-close" type="button" aria-label="Cerrar confirmación y volver al formulario" onClick={closeConfirmation}>×</button><p className="eyebrow">PQR recibida</p><h3>Tu solicitud fue recibida correctamente</h3>{confirmation.radicado ? <p><strong>Número de radicado:</strong> {confirmation.radicado}</p> : <p className="pqrs-confirmation-muted">El sistema no incluyó un número de radicado en la respuesta recibida.</p>}{confirmation.response ? <div className="pqrs-confirmation-response"><strong>Respuesta del sistema</strong><p>{confirmation.response}</p></div> : <p className="pqrs-confirmation-muted">No se recibió información adicional en la respuesta.</p>}</section>;
  }

  return <div className="pqrs-form-wrap pqrs-embed-wrap"><iframe key={frameKey} ref={frameRef} id="proshare-pqrs-embed" src="https://www.proshareapp.com/es/embed/@veesipp/contacto" title="Contacto" style={{ width: "100%", border: 0, minHeight: "520px" }} referrerPolicy="strict-origin-when-cross-origin" /></div>;
}
