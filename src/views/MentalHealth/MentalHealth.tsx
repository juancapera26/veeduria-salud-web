import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import collaborationIllustration from "../../assets/undraw-collaboration-live.svg";
import {
  Reveal,
  Stagger,
  StaggerItem,
  VisualReveal,
} from "../../components/ui/Motion";
const actions = [
  [
    "Promoción",
    "Conversaciones y herramientas para cuidar el bienestar emocional.",
  ],
  [
    "Prevención",
    "Acciones comunitarias que ayudan a reconocer y atender señales a tiempo.",
  ],
  [
    "Acompañamiento",
    "Orientación respetuosa para encontrar rutas y apoyos adecuados.",
  ],
];
export default function MentalHealth() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="section">
          <div className="page-wrap hero">
            <Reveal className="hero-content">
              <p className="eyebrow">Salud mental comunitaria</p>
              <h1 className="display">
                La salud mental también es un derecho.
              </h1>
              <p className="body-copy">
                Trabajamos por la promoción, prevención y fortalecimiento
                comunitario desde una mirada humana, respetuosa y esperanzadora.
              </p>
              <Link className="button button--coral" href="/registro">
                Regístrate <span>→</span>
              </Link>
            </Reveal>
            <VisualReveal className="section-visual">
              <img
                src={collaborationIllustration.src}
                alt="Personas conversando y colaborando"
              />
            </VisualReveal>
          </div>
        </section>
        <section className="section">
          <div className="page-wrap">
            <Reveal className="section-intro">
              <p className="eyebrow">Cómo aportamos</p>
              <h2 className="heading">Cuidado que escucha y acompaña</h2>
            </Reveal>
            <Stagger className="card-grid">
              {actions.map(([title, copy], index) => (
                <StaggerItem className="info-card" key={title}>
                  <span className="card-icon">{["○", "✦", "↗"][index]}</span>
                  <h2 className="card-title">{title}</h2>
                  <p className="card-copy">{copy}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
