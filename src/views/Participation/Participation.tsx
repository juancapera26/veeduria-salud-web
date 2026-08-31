import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import communityIllustration from "../../assets/undraw-community.svg";

export default function Participation() {
  return <div className="site-shell"><Navbar /><main><section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Participación ciudadana</p><h1 className="display">Tu voz también transforma.</h1><p className="body-copy">Puedes participar, informar situaciones, presentar casos, aportar información y hacer parte de los procesos de control social.</p><a className="button button--coral" href="/#pqrs">Quiero participar <span>→</span></a></div><aside className="section-visual" aria-label="Personas trabajando en comunidad"><img src={communityIllustration.src} alt="Personas colaborando en comunidad" /></aside></div></section><section className="section"><div className="page-wrap accent-section"><div className="section-intro"><p className="eyebrow">Una participación informada</p><h2 className="heading">Cada experiencia ayuda a construir soluciones.</h2><p className="body-copy">Fortalecemos espacios de escucha, diálogo y corresponsabilidad entre ciudadanía e instituciones.</p></div></div></section></main><Footer /></div>;
}
