"use client";

import { FormEvent, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import contactIllustration from "../../assets/undraw-contact.svg";
import { Reveal, VisualReveal } from "../../components/ui/Motion";

type ApiResponse = { ticketNumber?: string };

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setTicketNumber(null);
    setError(null);
    const form = event.currentTarget;
    const values = new FormData(form);

    try {
      const response = await fetch("https://www.proshareapp.com/api/public/pqrs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ establishmentHandle: "veesipp", category: "contacto", source: "api", name: values.get("name"), email: values.get("email"), phone: values.get("phone") || undefined, subject: values.get("subject") || undefined, message: values.get("message"), dataConsent: values.get("dataConsent") === "on", locale: "es" }) });
      const data = await response.json() as ApiResponse;
      if (!response.ok) throw new Error("Request failed");
      setTicketNumber(data.ticketNumber ?? null);
      form.reset();
    } catch {
      setError("No pudimos enviar tu mensaje. Por favor, inténtalo nuevamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return <div className="site-shell"><Navbar /><main><section className="section"><div className="page-wrap split"><Reveal className="stack"><p className="eyebrow">Contacto</p><h1 className="display">Estamos para escucharte.</h1><p className="body-copy">Cada comunicación es importante para nosotros. Escríbenos y te orientaremos con cercanía y respeto.</p><VisualReveal className="contact-visual"><img src={contactIllustration.src} alt="Canales de comunicación y atención" /></VisualReveal><div className="soft-panel"><p className="card-copy">Correo: <a href="mailto:veesipp@veesippcolombia.com">veesipp@veesippcolombia.com</a></p><p className="card-copy">Teléfono: <a href="tel:+573163587515">316 358 7515</a></p><p className="card-copy">Dirección: Avenida Ambalá</p></div></Reveal><Reveal className="statement-card stack"><form className="contact-form" onSubmit={handleSubmit}><h2 className="card-title">Envíanos un mensaje</h2><div className="contact-form-fields"><input required name="name" placeholder="Nombre"/><input required name="email" type="email" placeholder="Correo electrónico"/><input name="phone" type="tel" placeholder="Teléfono (opcional)"/><input name="subject" placeholder="Asunto (opcional)"/></div><textarea required name="message" rows={5} placeholder="Mensaje"/><label className="contact-consent"><input required name="dataConsent" type="checkbox"/><span>Acepto el tratamiento de mis datos personales para atender esta solicitud.</span></label>{ticketNumber && <p className="contact-feedback contact-feedback--success" role="status">Mensaje enviado correctamente.<br/><span>Número de radicado: <strong>{ticketNumber}</strong></span></p>}{!ticketNumber && !error && <p className="contact-help">Al enviar, tu mensaje será registrado en nuestro sistema de atención.</p>}{error && <p className="contact-feedback contact-feedback--error" role="alert">{error}</p>}<button className="button button--coral" type="submit" disabled={submitting}>{submitting ? "Enviando…" : "Enviar mensaje"} <span>→</span></button></form></Reveal></div></section></main><Footer /></div>;
}
