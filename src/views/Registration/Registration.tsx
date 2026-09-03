"use client";

import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo-veesipp-colombia.png";
import mentalHealthImage from "../../../public/congreso-salud-mental.png";
import personeriaImage from "../../../public/personeria-ibague.png";
import { Reveal, Stagger, StaggerItem, VisualReveal } from "../../components/ui/Motion";

const EMBED_ORIGINS = ["https://www.proshareapp.com", "https://proshareapp.com"];
type EmbedMessage = { source?: string; type?: string; event?: string; height?: number; redirectUrl?: string; redirect_url?: string; status?: "confirmed" | "paid" | "success" | "completed"; data?: EmbedMessage };

export default function Registration() {
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
        if (redirectUrl && redirectRef.current === null) {
          redirectRef.current = window.setTimeout(() => { window.location.href = redirectUrl; }, 3000);
        }
      }
    };
    window.addEventListener("message", onMessage);
    return () => { window.removeEventListener("message", onMessage); if (redirectRef.current !== null) window.clearTimeout(redirectRef.current); };
  }, []);
  const handleFrameLoad = () => {
    if (frameLoadedRef.current) {
      setConfirmed(true);
      if (redirectRef.current === null) {
        redirectRef.current = window.setTimeout(() => { window.location.href = "/"; }, 3000);
      }
    }
    frameLoadedRef.current = true;
  };
  return <div className="congreso-reference-page"><main>
    <section className="ref-hero"><div className="ref-wrap"><div className="ref-header"><img src={logo.src} alt="VEESIPP Colombia" /><div className="ref-personeria"><img src={personeriaImage.src} alt="Personer&iacute;a de Ibagu&eacute;" /></div></div><p className="ref-backed">Congreso Nacional de Salud Mental con el respaldo oficial de VEESIPP y la Personer&iacute;a de Ibagu&eacute;</p><div className="ref-hero-stage"><div className="ref-hero-copy"><Reveal><p className="ref-kicker">SALUD MENTAL</p><p className="ref-location">IBAGU&Eacute; &middot; COLOMBIA &middot; 22 Y 23 DE OCTUBRE</p><h1>Primer Congreso Nacional<br />de Salud Mental Integral:<br /><span>Cuidarnos en cada Etapa</span></h1><p className="ref-description">Un espacio &uacute;nico de articulaci&oacute;n p&uacute;blico-privada para abordar la salud mental en Colombia, desde la infancia hasta la adultez mayor. Adem&aacute;s, &iexcl;generemos juntos la declaraci&oacute;n nacional para el cambio!</p><a className="ref-gold-button" href="#registro">&iexcl;Inscribirme Ahora Gratis a asegura Certificado! <b>&rarr;</b></a></Reveal></div><VisualReveal className="ref-watermark"><img src={mentalHealthImage.src} alt="" aria-hidden="true" /></VisualReveal></div></div></section>
    <section className="ref-alert"><div className="ref-wrap"><span>⚠️</span><p><strong>Importante:</strong> El registro en esta web es el primer paso. <b>Para recibir tu certificado, la asistencia presencial es obligatoria</b> y se validar&aacute; mediante registro digital en el evento. &iexcl;Cupos limitados para el panel nacional!</p></div></section>
    <section className="ref-section ref-why"><div className="ref-wrap"><Reveal className="ref-section-title"><p>POR QU&Eacute; ASISTIR</p><h2>Mucho m&aacute;s que un Congreso: tu oportunidad<br />de incidir en la Salud Mental del pa&iacute;s.</h2></Reveal><Stagger className="ref-cards">{[["✪","Certificaci&oacute;n Oficial de Asistencia","Recibe un certificado oficial avalado por la Personer&iacute;a de Ibagu&eacute; y VEESIPP. Requiere registro de asistencia digital en el evento."],["✥","Incide en el Banco de Proyectos 2027","Participa activamente en la construcci&oacute;n de propuestas y recomendaciones que se integrar&aacute;n en la Declaraci&oacute;n Nacional del Congreso."],["◉","Articulaci&oacute;n P&uacute;blico-Privada","Conecta con actores clave: personeros nacionales, l&iacute;deres, academia y empresas para generar soluciones conjuntas."]].map(([icon,title,copy]) => <StaggerItem key={title}><article><span>{icon}</span><h3 dangerouslySetInnerHTML={{__html:title}} /><p dangerouslySetInnerHTML={{__html:copy}} /></article></StaggerItem>)}</Stagger></div></section>
    <section className="ref-section ref-agenda"><div className="ref-wrap"><Reveal className="ref-section-title ref-centered"><p>LA AGENDA DEL CAMBIO</p><h2>Dos d&iacute;as intensos de<br />conocimiento y acci&oacute;n.</h2></Reveal><div className="ref-days"><Reveal><article><b>D&Iacute;A 1</b><h3>El Diagn&oacute;stico y el Contexto</h3><ul><li>Registro y bienvenida</li><li>Aspectos legales de la salud mental</li><li>Panorama nacional desde la Personer&iacute;a</li><li>Hilo 1: Infancia y adolescencia</li><li>Hilo 2: Mayor&iacute;a de edad, estudios y primer empleo</li><li>Hilo 3: Salud y Seguridad en el Trabajo (SST)</li><li>Hilo 4: Adultez mayor y condiciones cr&oacute;nicas</li></ul><p className="ref-green-note">Aprender&aacute;s sobre primeros auxilios psicol&oacute;gicos, atenci&oacute;n temprana en la comunidad y el hogar</p></article></Reveal><Reveal><article className="ref-day-two"><b>D&Iacute;A 2</b><h3>Hacia la Acci&oacute;n y el Futuro</h3><ul><li>El Gran Panel Nacional</li><li>Creaci&oacute;n del Banco de Proyectos 2027</li><li>Firma de la Declaraci&oacute;n del Congreso</li><li>Conclusiones y recomendaciones</li><li>Estrategia de Articulaci&oacute;n Nacional y Networking</li></ul><p className="ref-green-note">Conecta con actores clave: personeros nacionales, l&iacute;deres, academia y empresas para generar soluciones conjuntas por el pa&iacute;s.</p></article></Reveal></div><a className="ref-green-button" href="#registro">Quiero ser parte de esta declaraci&oacute;n. &iexcl;Inscribirme!</a></div></section>
    <section id="registro" className="ref-section ref-registration"><div className="ref-wrap"><Reveal className="ref-section-title ref-centered"><p>CUPOS SIN COSTO</p><h2>Completa tu Inscripci&oacute;n Gratuita</h2><span>Tu participaci&oacute;n fortalece la conversaci&oacute;n nacional sobre salud mental integral.</span></Reveal>{confirmed && <div className="registration-success" role="status" aria-live="polite"><strong>&iexcl;Gracias por registrarte al evento!</strong><span>Tu inscripci&oacute;n fue recibida. Te estamos redirigiendo a los detalles del evento.</span></div>}<Reveal className="ref-iframe"><iframe ref={frameRef} onLoad={handleFrameLoad} src="https://www.proshareapp.com/es/embed/@veesipp/eventos/congreso-salud-mental-2026" title="Formulario de inscripci&oacute;n al Congreso Nacional de Salud Mental Integral" style={{width:"100%",minHeight:"720px",border:0}} referrerPolicy="strict-origin-when-cross-origin" /></Reveal><p className="ref-free-note">La inscripci&oacute;n es gratuita y los cupos son personales, limitados e intransferibles.</p></div></section>
    <section className="ref-event-info"><div className="ref-wrap"><Reveal className="ref-section-title ref-centered"><p>ENCUENTRO PRESENCIAL</p><h2>Informaci&oacute;n del Evento</h2></Reveal><div className="ref-info-grid"><article><span>▣</span><p><b>22 y 23 de octubre de 2026.</b> Auditorio de la Universidad del Tolima, Sede Calle 10. Ibagu&eacute;, Colombia.</p></article><article><span>⌖</span><p><u>Ubicaci&oacute;n del Auditorio &mdash; consultar en Google Maps</u></p></article></div><div className="ref-sponsors"><strong>Aliados y patrocinadores</strong><span>Espacios reservados para los logos de patrocinadores</span></div><div className="ref-legal"><u>Pol&iacute;tica de Privacidad</u><u>T&eacute;rminos y Condiciones de Uso de Datos</u></div></div></section>
  </main></div>;
}
