"use client";

import { useEffect, useRef, useState } from "react";

const EMBED_ORIGINS = ["https://www.proshareapp.com", "https://proshareapp.com"];
type EmbedMessage = { source?: string; type?: string; event?: string; height?: number; redirectUrl?: string; redirect_url?: string; status?: "confirmed" | "paid" | "success" | "completed"; data?: EmbedMessage };

export function useRegistrationEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const redirectRef = useRef<number | null>(null);
  const frameLoadedRef = useRef(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent<EmbedMessage>) => {
      if (!EMBED_ORIGINS.includes(event.origin)) return;
      const rawData = (typeof event.data === "string" ? (() => { try { return JSON.parse(event.data) as EmbedMessage; } catch { return {} as EmbedMessage; } })() : event.data) ?? {};
      const data = rawData.data && typeof rawData.data === "object" ? { ...rawData, ...rawData.data } : rawData;
      if (data.source && data.source !== "proshare-event-embed") return;
      if (data.type === "resize" && typeof data.height === "number" && frameRef.current) frameRef.current.style.height = `${data.height}px`;
      const messageText = JSON.stringify(event.data).toLowerCase();
      const completionHint = /registration|inscripci|success|confirm|paid|complete|completed|gracias|recibida/.test(messageText) && !messageText.includes("resize");
      const registrationConfirmed = ["registration_complete", "registration_success", "registration_confirmed", "registration_completed", "success", "completed"].includes(data.type ?? "") || ["registration_complete", "registration_success", "registration_confirmed", "success", "completed"].includes(data.event ?? "") || ["confirmed", "paid", "success", "completed"].includes(data.status ?? "") || completionHint;
      if (registrationConfirmed) {
        setConfirmed(true);
        const redirectUrl = data.redirectUrl ?? data.redirect_url;
        if (redirectUrl && redirectRef.current === null) redirectRef.current = window.setTimeout(() => { window.location.href = redirectUrl; }, 3000);
      }
    };
    window.addEventListener("message", onMessage);
    return () => { window.removeEventListener("message", onMessage); if (redirectRef.current !== null) window.clearTimeout(redirectRef.current); };
  }, []);

  const handleFrameLoad = () => {
    if (frameLoadedRef.current) {
      setConfirmed(true);
      if (redirectRef.current === null) redirectRef.current = window.setTimeout(() => { window.location.href = "/"; }, 3000);
    }
    frameLoadedRef.current = true;
  };

  return { frameRef, confirmed, handleFrameLoad };
}
