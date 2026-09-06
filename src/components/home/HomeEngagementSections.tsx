"use client";

import Link from "next/link";
import { useState } from "react";
import proshareLogo from "../../assets/proshare-logo.jpeg";
import PqrsForm from "./PqrsForm";
import PqrsStatusForm from "./PqrsStatusForm";
import { HomeIllustration, TagGroup } from "./HomeShared";
import { principles, values } from "../../data/homeContent";

export function MentalHealthCta() {
  return <section className="section"><div className="page-wrap cta"><div className="stack"><p className="eyebrow">Salud mental comunitaria</p><h2 className="heading">La salud mental también es un derecho.</h2><p className="body-copy">La salud mental forma parte integral del derecho a la salud. Trabajamos por su promoción, prevención y fortalecimiento comunitario desde una mirada humana, respetuosa y esperanzadora.</p><Link className="button button--coral" href="/salud-mental">Conoce más <span>→</span></Link></div><div className="cta-visual-stack"><HomeIllustration index={0} alt="Bienestar y cuidado comunitario" /><div className="cta-badge">Cuidar la salud mental es cuidar la vida.</div></div></div></section>;
}

export function ParticipationSection() {
  return <section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Participación ciudadana</p><h2 className="heading">Tu voz también transforma</h2><p className="body-copy">Puedes participar, informar situaciones, presentar casos, aportar información y hacer parte de los procesos de control social. Tu experiencia ayuda a construir soluciones más cercanas a las personas.</p><Link className="button" href="/participacion">Quiero participar <span>→</span></Link></div><div className="soft-panel"><HomeIllustration index={1} alt="Personas colaborando en la participación ciudadana" /><p className="quote">Informar · Aportar · Dialogar · Proponer · Construir</p></div></div></section>;
}

export function AlliesSection() {
  return <section className="section allies-section"><div className="page-wrap allies-layout"><div className="allies-copy"><p className="eyebrow">Trabajo colaborativo</p><h2 className="heading">Aliados estratégicos</h2><p className="body-copy">Construimos alianzas con organizaciones e instituciones que comparten el compromiso por una salud más humana, participativa y cercana.</p></div><div className="allies-logos" aria-label="Aliados estratégicos"><a className="ally-logo-slot" href="https://www.proshareapp.com" aria-label="Visitar ProShare"><img src={proshareLogo.src} alt="" /><span>ProShare</span></a></div></div></section>;
}

export function PqrsSection() {
  return <section id="pqrs" className="section pqrs-section"><div className="page-wrap pqrs-layout"><div className="pqrs-copy"><p className="eyebrow">PQRS</p><h2>¿Tienes una situación que quieres reportar?</h2><p>Cuéntanos tu caso. Estamos para escucharte, orientarte y acompañarte.</p></div><PqrsOptions /></div></section>;
}

function PqrsOptions() {
  const [activeOption, setActiveOption] = useState<"register" | "status">("register");
  return <div className="pqrs-options"><div className="pqrs-tabs" role="tablist" aria-label="Opciones de PQRS"><button type="button" role="tab" aria-selected={activeOption === "register"} className={activeOption === "register" ? "pqrs-tab pqrs-tab--active" : "pqrs-tab"} onClick={() => setActiveOption("register")}>Registrar una PQR</button><button type="button" role="tab" aria-selected={activeOption === "status"} className={activeOption === "status" ? "pqrs-tab pqrs-tab--active" : "pqrs-tab"} onClick={() => setActiveOption("status")}>Ver estado de PQR</button></div><div className={activeOption === "register" ? "pqrs-tabpanel" : "pqrs-tabpanel pqrs-tabpanel--hidden"} role="tabpanel" aria-hidden={activeOption !== "register"}><PqrsForm /></div><div className={activeOption === "status" ? "pqrs-tabpanel" : "pqrs-tabpanel pqrs-tabpanel--hidden"} role="tabpanel" aria-hidden={activeOption !== "status"}><PqrsStatusForm /></div></div>;
}

export function InstitutionalTags() {
  return <section className="section"><div className="page-wrap statement"><TagGroup label="Principios institucionales">{principles.map((item) => <span className="tag" key={item}>{item}</span>)}</TagGroup><TagGroup label="Valores que nos orientan">{values.map((item) => <span className="tag" key={item}>{item}</span>)}</TagGroup></div></section>;
}

export function ValueSection() {
  return <section className="section"><div className="page-wrap purpose"><p className="eyebrow">Propuesta de valor</p><h2 className="heading">Lo que hacemos por ti</h2><HomeIllustration index={2} alt="Personas unidas para construir soluciones de valor" /><p className="body-copy" style={{ color: "#d9f1ee", maxWidth: 820 }}>Confianza · Representación ciudadana · Defensa de derechos · Participación social · Transparencia · Control social · Educación · Orientación · Incidencia · Construcción de soluciones</p></div></section>;
}
