"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import banner from "../../assets/banner-veesipp.png";
import proshareLogo from "../../assets/proshare-logo.jpeg";
import collaborationIllustration from "../../assets/undraw-collaboration.svg";
import { HeroReveal, Interactive, Stagger, StaggerItem } from "../../components/ui/Motion";

const services = [
  ["Defensa de los derechos en salud", "Acompañamiento informado para proteger el derecho fundamental a la salud."],
  ["Vigilancia ciudadana", "Seguimiento responsable al sistema de salud y sus compromisos."],
  ["Seguimiento institucional", "Observación de EPS, IPS y entidades públicas desde un enfoque ciudadano."],
  ["Salud Mental Comunitaria", "Promoción, prevención y bienestar psicosocial en comunidad."],
  ["Educación en derechos y deberes", "Información sencilla para ejercer los derechos con autonomía."],
  ["Orientación al usuario", "Escucha y guía inicial para comprender cada situación."],
  ["Recepción y análisis de casos", "Lectura cuidadosa de situaciones y necesidades reportadas."],
  ["Participación ciudadana", "Procesos para informarse, dialogar y aportar al cambio."],
  ["Acompañamiento institucional", "Puentes de diálogo respetuoso entre ciudadanía e instituciones."],
  ["Control social", "Herramientas para fortalecer la corresponsabilidad ciudadana."],
  ["Promoción y prevención", "Acciones que priorizan bienestar, cuidado y salud integral."],
  ["Formación de líderes comunitarios", "Capacidades locales para impulsar una participación informada."],
  ["Mesas de diálogo institucional", "Conversaciones con enfoque de soluciones y compromiso."],
  ["Informes ciudadanos", "Análisis y comunicaciones claras sobre hallazgos relevantes."],
  ["Seguimiento a compromisos", "Observación de avances y acuerdos institucionales."],
  ["Propuestas de mejoramiento", "Construcción de alternativas con base en evidencia y escucha."],
];
const principles = ["Transparencia", "Participación ciudadana", "Inclusión", "Equidad", "Humanización", "Independencia", "Corresponsabilidad", "Respeto por la dignidad humana", "Enfoque diferencial", "Responsabilidad social"];
const values = ["Honestidad", "Integridad", "Empatía", "Respeto", "Solidaridad", "Compromiso", "Justicia", "Liderazgo", "Servicio", "Trabajo colaborativo"];
const strategicAllies = [
  { name: "ProShare", href: "https://www.proshareapp.com", logo: proshareLogo },
];

function WorkCard({ title, copy, icon }: { title: string; copy: string; icon: string }) {
  return <StaggerItem><article className="info-card"><span className="card-icon">{icon}</span><h3 className="card-title">{title}</h3><p className="card-copy">{copy}</p></article></StaggerItem>;
}

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <div id="inicio" className="site-shell"><Navbar /><main>
    <section className="site-banner"><div className="page-wrap"><img src={banner.src} alt="VEESIPP Colombia: vigilamos, participamos y transformamos" /></div></section>
    <div className="page-wrap hero hero--intro">
      <HeroReveal className="hero-content"><p className="eyebrow">Veeduría ciudadana en salud</p><h1 className="display">Una veeduría cercana a las comunidades.</h1><p className="body-copy">Somos una Veeduría Ciudadana comprometida con la defensa del derecho fundamental a la salud integral y la salud mental, promoviendo transparencia, participación ciudadana y control social para construir un sistema de salud más humano, eficiente y cercano a las personas.</p><div className="hero-actions"><Interactive><a className="button button--coral" href="#pqrs">Presentar una PQRS <span>→</span></a></Interactive><Interactive><a className="button button--outline" href="#labor">Conoce nuestra labor</a></Interactive></div></HeroReveal>
      <HeroReveal className="hero-visual hero-visual--home"><img src={collaborationIllustration.src} alt="Personas colaborando para construir soluciones" /><div className="hero-visual-note"><p className="eyebrow">Nuestro compromiso</p><p>Escuchar, orientar y construir soluciones.</p></div></HeroReveal>
    </div>

    <section className="trust-strip" aria-label="Compromisos institucionales"><div className="page-wrap trust-grid"><div className="trust-intro"><p className="eyebrow">Nuestro compromiso</p><p>Una veeduría que acompaña con respeto, evidencia y vocación de servicio.</p></div><div className="trust-item"><span className="trust-icon">§</span><div><strong>Fundamento legal</strong><span>Ley 850 de 2003</span></div></div><div className="trust-item"><span className="trust-icon">◎</span><div><strong>Enfoque ciudadano</strong><span>Participación y control social</span></div></div><div className="trust-item"><span className="trust-icon">+</span><div><strong>Salud integral</strong><span>Bienestar físico y mental</span></div></div></div></section>

    <section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Sobre nosotros</p><h2 className="heading">¿Quiénes somos?</h2><p className="body-copy">VEESIPP Colombia es una organización ciudadana conformada bajo el marco jurídico colombiano, dedicada a ejercer vigilancia, seguimiento y control social sobre el Sistema General de Seguridad Social en Salud. Promovemos la participación, defendemos el derecho a la salud, escuchamos y orientamos a la ciudadanía, y trabajamos por la transparencia, la salud integral y la salud mental.</p></div><div className="soft-panel"><p className="eyebrow">Nuestra forma de estar</p><p className="quote">Escuchamos · Orientamos · Acompañamos · Vigilamos · Proponemos</p></div></div></section>

    <section className="section"><div className="page-wrap purpose"><p className="eyebrow">Nuestro propósito</p><h2 className="heading">Ser un puente entre la ciudadanía y las instituciones del sector salud para garantizar una atención digna, humana, oportuna y de calidad.</h2></div></section>

    <section id="labor" className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Ejes de trabajo</p><h2 className="heading">Vigilancia, seguimiento y control social</h2><p className="body-copy">Tres ejes que convierten la participación ciudadana en acciones de escucha, observación y mejoramiento del sistema de salud.</p></div><div className="card-grid">{[["Vigilancia", "Observación ciudadana para reconocer oportunidades de mejora en el sistema de salud."], ["Seguimiento", "Monitoreo respetuoso de casos, procesos y compromisos institucionales."], ["Control social", "Participación activa para contribuir a servicios de salud más transparentes y cercanos."]].map(([title, copy], i) => <WorkCard key={title} title={title} copy={copy} icon={["◌", "↗", "✦"][i]} />)}</div></div></section>

    <section className="section"><div className="page-wrap accent-section"><div className="split"><div className="stack"><p className="eyebrow">Participación con propósito</p><h2 className="heading">Nuestro marco ciudadano y jurídico</h2><p className="body-copy">Somos una organización ciudadana constituida bajo el marco jurídico colombiano. Promovemos la participación, la defensa de los derechos en salud, la vigilancia y el control social para fortalecer la transparencia y la relación entre ciudadanía e instituciones.</p></div><div className="statement-card"><h3 className="card-title">Un puente, no un reemplazo.</h3><p className="card-copy">No sustituimos a las autoridades ni a las entidades de salud. Acompañamos a la ciudadanía y promovemos un diálogo transparente para contribuir a soluciones más humanas y cercanas.</p></div></div></div></section>

    <section className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Rigor y cercanía</p><h2 className="heading">Una veeduría que actúa con rigor y cercanía.</h2></div><div className="statement"><div className="statement-card"><p className="eyebrow">Misión</p><p className="body-copy">Promover el control social, la participación ciudadana y la protección de los derechos de las personas mediante acciones de vigilancia, seguimiento, educación, investigación y articulación comunitaria que contribuyan al fortalecimiento de la salud integral y el bienestar biopsicosocial.</p></div><div className="statement-card"><p className="eyebrow">Visión 2035</p><p className="body-copy">Para el año 2035, VEESIPP Colombia será reconocida a nivel nacional como una organización líder en participación ciudadana, salud integral y protección psicosocial.</p></div></div></div></section>

    <section className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Nuestro portafolio</p><h2 className="heading">¿Cómo podemos ayudarte?</h2><p className="body-copy">Acciones de orientación, vigilancia, formación y articulación para fortalecer una salud más cercana y participativa.</p></div><div className="card-grid portfolio">{services.map(([title, copy], i) => <WorkCard key={title} title={title} copy={copy} icon={["+", "↗", "◌", "✦"][i % 4]} />)}</div></div></section>

    <section className="section"><div className="page-wrap cta"><div className="stack"><p className="eyebrow">Salud mental comunitaria</p><h2 className="heading">La salud mental también es un derecho.</h2><p className="body-copy">La salud mental forma parte integral del derecho a la salud. Trabajamos por su promoción, prevención y fortalecimiento comunitario desde una mirada humana, respetuosa y esperanzadora.</p><Link className="button button--coral" href="/salud-mental">Conoce más <span>→</span></Link></div><div className="cta-badge">Cuidar la salud mental es cuidar la vida.</div></div></section>

    <section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Participación ciudadana</p><h2 className="heading">Tu voz también transforma</h2><p className="body-copy">Puedes participar, informar situaciones, presentar casos, aportar información y hacer parte de los procesos de control social. Tu experiencia ayuda a construir soluciones más cercanas a las personas.</p><Link className="button" href="/participacion">Quiero participar <span>→</span></Link></div><div className="soft-panel"><p className="quote">Informar · Aportar · Dialogar · Proponer · Construir</p></div></div></section>

    <section className="section allies-section"><div className="page-wrap allies-layout"><div className="allies-copy"><p className="eyebrow">Trabajo colaborativo</p><h2 className="heading">Aliados estratégicos</h2><p className="body-copy">Construimos alianzas con organizaciones e instituciones que comparten el compromiso por una salud más humana, participativa y cercana.</p></div><div className="allies-logos" aria-label="Aliados estratégicos">{strategicAllies.map((ally) => <a className="ally-logo-slot" href={ally.href} key={ally.name} aria-label={`Visitar ${ally.name}`}><img src={ally.logo.src} alt="" /><span>{ally.name}</span></a>)}</div></div></section>

    <section id="pqrs" className="section pqrs-section"><div className="page-wrap pqrs-layout"><div className="pqrs-copy"><p className="eyebrow">PQRS</p><h2>¿Tienes una situación que quieres reportar?</h2><p>Cuéntanos tu caso. Estamos para escucharte, orientarte y acompañarte.</p></div><div className="pqrs-form-wrap">{sent && <p className="pqrs-success" role="status">Tu PQRS fue enviada correctamente. Recibirás confirmación en tu correo.</p>}<form onSubmit={submit} className="pqrs-form"><label>Nombre<input required name="nombre" placeholder="Tu nombre" /></label><label>Correo electrónico<input required type="email" name="correo" placeholder="nombre@correo.com" /></label><label>Teléfono<input name="telefono" placeholder="Tu teléfono" /></label><label>Ciudad<input name="ciudad" placeholder="Tu ciudad" /></label><label className="pqrs-full">Tipo de solicitud<select name="tipo" defaultValue="Petición"><option>Petición</option><option>Queja</option><option>Reclamo</option><option>Sugerencia</option></select></label><label className="pqrs-full">Descripción del caso<textarea required name="descripcion" rows={5} placeholder="Cuéntanos lo que consideres importante" /></label><p className="pqrs-attachment">Adjuntar documentos · Próximamente</p><label className="pqrs-consent"><input required type="checkbox" name="terminos" />Acepto el tratamiento de datos personales.</label><div className="pqrs-full"><button className="button pqrs-submit" type="submit">Enviar PQRS <span>→</span></button></div></form></div></div></section>

    <section className="section"><div className="page-wrap statement"><div className="stack"><p className="eyebrow">Principios institucionales</p><div className="tag-list">{principles.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div><div className="stack"><p className="eyebrow">Valores que nos orientan</p><div className="tag-list">{values.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></div></section>

    <section className="section"><div className="page-wrap purpose"><p className="eyebrow">Propuesta de valor</p><h2 className="heading">Lo que hacemos por ti</h2><p className="body-copy" style={{ color: "#d9f1ee", maxWidth: 820 }}>Confianza · Representación ciudadana · Defensa de derechos · Participación social · Transparencia · Control social · Educación · Orientación · Incidencia · Construcción de soluciones</p></div></section>
  </main><Footer /></div>;
}
