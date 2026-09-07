import banner from "../../assets/banner-veesipp-nuevo.jpeg";
import collaborationIllustration from "../../assets/undraw-collaboration.svg";
import communityIllustration from "../../assets/undraw-community.svg";
import contactIllustration from "../../assets/undraw-contact.svg";
import joinIllustration from "../../assets/undraw-join.svg";
import { HeroReveal, Interactive, Stagger, StaggerItem } from "../ui/Motion";
import { HomeIllustration, WorkCard } from "./HomeShared";

export function HomeHero() {
  return <>
    <section className="site-banner"><div className="page-wrap"><img src={banner.src} alt="VEESIPP Colombia: vigilamos, participamos y transformamos" /></div></section>
    <div className="page-wrap hero hero--intro">
      <HeroReveal className="hero-content"><p className="eyebrow">Veeduría ciudadana en salud</p><h1 className="display">Una veeduría cercana a las comunidades.</h1><p className="body-copy">Somos una Veeduría Ciudadana comprometida con la defensa del derecho fundamental a la salud integral y la salud mental, promoviendo transparencia, participación ciudadana y control social para construir un sistema de salud más humano, eficiente y cercano a las personas.</p><div className="hero-actions"><Interactive><a className="button button--coral" href="#pqrs">Presentar una PQRS <span>→</span></a></Interactive><Interactive><a className="button button--outline" href="#labor">Conoce nuestra labor</a></Interactive></div></HeroReveal>
      <HeroReveal className="hero-visual hero-visual--home"><img src={collaborationIllustration.src} alt="Personas colaborando para construir soluciones" /><div className="hero-visual-note"><p className="eyebrow">Nuestro compromiso</p><p>Escuchar, orientar y construir soluciones.</p></div></HeroReveal>
    </div>
    <section className="home-visual-strip" aria-label="Acciones que construyen bienestar"><Stagger className="page-wrap home-visual-grid"><StaggerItem className="home-visual-card"><img src={communityIllustration.src} alt="Personas trabajando por una comunidad saludable" /><span>Participación ciudadana</span></StaggerItem><StaggerItem className="home-visual-card"><img src={joinIllustration.src} alt="Personas uniéndose a una causa común" /><span>Trabajo colaborativo</span></StaggerItem><StaggerItem className="home-visual-card"><img src={contactIllustration.src} alt="Canales de escucha y orientación" /><span>Escucha y orientación</span></StaggerItem></Stagger></section>
    <section className="trust-strip" aria-label="Compromisos institucionales"><div className="page-wrap trust-grid"><div className="trust-intro"><p className="eyebrow">Nuestro compromiso</p><p>Una veeduría que acompaña con respeto, evidencia y vocación de servicio.</p></div><div className="trust-item"><span className="trust-icon">§</span><div><strong>Fundamento legal</strong><span>Ley 850 de 2003</span></div></div><div className="trust-item"><span className="trust-icon">◎</span><div><strong>Enfoque ciudadano</strong><span>Participación y control social</span></div></div><div className="trust-item"><span className="trust-icon">+</span><div><strong>Salud integral</strong><span>Bienestar físico y mental</span></div></div></div></section>
  </>;
}

export function AboutSections() {
  return <>
    <section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Sobre nosotros</p><h2 className="heading">¿Quiénes somos?</h2><p className="body-copy">VEESIPP Colombia es una organización ciudadana conformada bajo el marco jurídico colombiano, dedicada a ejercer vigilancia, seguimiento y control social sobre el Sistema General de Seguridad Social en Salud. Promovemos la participación, defendemos el derecho a la salud, escuchamos y orientamos a la ciudadanía, y trabajamos por la transparencia, la salud integral y la salud mental.</p></div><div className="soft-panel"><HomeIllustration index={0} alt="Comunidad participando en acciones de salud" /><p className="eyebrow">Nuestra forma de estar</p><p className="quote">Escuchamos · Orientamos · Acompañamos · Vigilamos · Proponemos</p></div></div></section>
    <section className="section"><div className="page-wrap purpose"><p className="eyebrow">Nuestro propósito</p><h2 className="heading">Ser un puente entre la ciudadanía y las instituciones del sector salud para garantizar una atención digna, humana, oportuna y de calidad.</h2></div></section>
    <section id="labor" className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Ejes de trabajo</p><h2 className="heading">Vigilancia, seguimiento y control social</h2><p className="body-copy">Tres ejes que convierten la participación ciudadana en acciones de escucha, observación y mejoramiento del sistema de salud.</p></div><HomeIllustration index={1} alt="Personas colaborando en el seguimiento ciudadano" /><div className="card-grid">{[["Vigilancia", "Observación ciudadana para reconocer oportunidades de mejora en el sistema de salud."], ["Seguimiento", "Monitoreo respetuoso de casos, procesos y compromisos institucionales."], ["Control social", "Participación activa para contribuir a servicios de salud más transparentes y cercanos."]].map(([title, copy], i) => <WorkCard key={title} title={title} copy={copy} icon={["◌", "↗", "✦"][i]} />)}</div></div></section>
  </>;
}
