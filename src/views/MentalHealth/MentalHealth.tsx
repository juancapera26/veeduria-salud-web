import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const actions = [
  ["Promoción", "Conversaciones y herramientas para cuidar el bienestar emocional."],
  ["Prevención", "Acciones comunitarias que ayudan a reconocer y atender señales a tiempo."],
  ["Acompañamiento", "Orientación respetuosa para encontrar rutas y apoyos adecuados."],
];

export default function MentalHealth() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="section">
          <div className="page-wrap hero">
            <div className="hero-content">
              <p className="eyebrow">Salud mental comunitaria</p>
              <h1 className="display">La salud mental tambi&eacute;n es un derecho.</h1>
              <p className="body-copy">Trabajamos por la promoci&oacute;n, prevenci&oacute;n y fortalecimiento comunitario desde una mirada humana, respetuosa y esperanzadora.</p>
              <Link className="button button--coral" href="/registro">Reg&iacute;strate <span>&rarr;</span></Link>
            </div>
            <div className="soft-panel"><p className="quote">El bienestar se construye en comunidad.</p></div>
          </div>
        </section>
        <section className="section">
          <div className="page-wrap">
            <div className="section-intro">
              <p className="eyebrow">C&oacute;mo aportamos</p>
              <h2 className="heading">Cuidado que escucha y acompa&ntilde;a</h2>
            </div>
            <div className="card-grid">
              {actions.map(([title, copy], index) => (
                <article className="info-card" key={title}>
                  <span className="card-icon">{["◌", "✦", "↗"][index]}</span>
                  <h2 className="card-title">{title}</h2>
                  <p className="card-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
