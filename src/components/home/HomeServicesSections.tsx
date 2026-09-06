import { HomeIllustration, WorkCard } from "./HomeShared";
import { services } from "../../data/homeContent";

export function FrameworkSection() {
  return <section className="section"><div className="page-wrap accent-section"><div className="split"><div className="stack"><p className="eyebrow">Participación con propósito</p><h2 className="heading">Nuestro marco ciudadano y jurídico</h2><p className="body-copy">Somos una organización ciudadana constituida bajo el marco jurídico colombiano. Promovemos la participación, la defensa de los derechos en salud, la vigilancia y el control social para fortalecer la transparencia y la relación entre ciudadanía e instituciones.</p></div><div className="statement-card"><HomeIllustration index={2} alt="Personas construyendo acuerdos ciudadanos" /><h3 className="card-title">Un puente, no un reemplazo.</h3><p className="card-copy">No sustituimos a las autoridades ni a las entidades de salud. Acompañamos a la ciudadanía y promovemos un diálogo transparente para contribuir a soluciones más humanas y cercanas.</p></div></div></div></section>;
}

export function RigorSection() {
  return <section className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Rigor y cercanía</p><h2 className="heading">Una veeduría que actúa con rigor y cercanía.</h2></div><HomeIllustration index={3} alt="Canales de orientación y acompañamiento" /><div className="statement"><div className="statement-card"><p className="eyebrow">Misión</p><p className="body-copy">Promover el control social, la participación ciudadana y la protección de los derechos de las personas mediante acciones de vigilancia, seguimiento, educación, investigación y articulación comunitaria que contribuyan al fortalecimiento de la salud integral y el bienestar biopsicosocial.</p></div><div className="statement-card"><p className="eyebrow">Visión 2035</p><p className="body-copy">Para el año 2035, VEESIPP Colombia será reconocida a nivel nacional como una organización líder en participación ciudadana, salud integral y protección psicosocial.</p></div></div></div></section>;
}

export function PortfolioSection() {
  return <section className="section"><div className="page-wrap"><div className="section-intro"><p className="eyebrow">Nuestro portafolio</p><h2 className="heading">¿Cómo podemos ayudarte?</h2><p className="body-copy">Acciones de orientación, vigilancia, formación y articulación para fortalecer una salud más cercana y participativa.</p></div><HomeIllustration index={1} alt="Colaboración para ofrecer servicios a la comunidad" /><div className="card-grid portfolio">{services.map(([title, copy], i) => <WorkCard key={title} title={title} copy={copy} icon={["+", "↗", "◌", "✦"][i % 4]} />)}</div></div></section>;
}
