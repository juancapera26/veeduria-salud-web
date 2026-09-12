import type { RefObject } from "react";
import logo from "../../assets/logo-veesipp-colombia.png";
import proshareLogo from "../../assets/proshare-logo.jpeg";
import mentalHealthImage from "../../../public/congreso-salud-mental.png";
import personeriaImage from "../../../public/personeria-ibague.png";
import { Reveal, Stagger, StaggerItem, VisualReveal } from "../ui/Motion";

export function RegistrationHero() {
  return (
    <section className="ref-hero">
      <div className="ref-wrap">
        <div className="ref-header">
          <img src={logo.src} alt="VEESIPP Colombia" />
          <img src="/logo-carlos-diaz-transparent.png" alt="Carlos Díaz Salud, Bienestar y Comunidad" />
          <img src="/logo-menteviva-transparent.png" alt="Menteviva" />
          <img src={proshareLogo.src} alt="Proshare" />
          <div className="ref-personeria">
            <img src={personeriaImage.src} alt="Personería de Ibagué" />
          </div>
        </div>
        <div className="ref-hero-stage">
          <div className="ref-hero-copy">
            <Reveal>
              <p className="ref-kicker">SALUD MENTAL</p>
              <p className="ref-location">
                IBAGUÉ · COLOMBIA · 22 Y 23 DE OCTUBRE
              </p>
              <h1>
                Primer Congreso Nacional
                <br />
                de Salud Mental Integral:
                <br />
                <span>Cuidarnos en cada Etapa</span>
              </h1>
              <p className="ref-description">
                Un espacio único de articulación público-privada para abordar la
                salud mental en Colombia, desde la infancia hasta la adultez
                mayor. Además, ¡generemos juntos la declaración nacional para el
                cambio!
              </p>
              <a className="ref-gold-button" href="#registro">
                ¡Inscribirme Ahora Gratis a asegura Certificado! <b>→</b>
              </a>
            </Reveal>
          </div>
          <VisualReveal className="ref-watermark">
            <img src={mentalHealthImage.src} alt="" aria-hidden="true" />
          </VisualReveal>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  [
    "✪",
    "Certificación Oficial de Asistencia",
    "Recibe un certificado oficial avalado por la Personería de Ibagué y VEESIPP. Requiere registro de asistencia digital en el evento.",
  ],
  [
    "✥",
    "Incide en el Banco de Proyectos 2027",
    "Participa activamente en la construcción de propuestas y recomendaciones que se integrarán en la Declaración Nacional del Congreso.",
  ],
  [
    "◉",
    "Articulación Público-Privada",
    "Conecta con actores clave: personeros nacionales, líderes, academia y empresas para generar soluciones conjuntas.",
  ],
];

export function RegistrationBenefits() {
  return (
    <section className="ref-section ref-why">
      <div className="ref-wrap">
        <Reveal className="ref-section-title">
          <p>POR QUÉ ASISTIR</p>
          <h2>
            Mucho más que un Congreso: tu oportunidad
            <br />
            de incidir en la Salud Mental del país.
          </h2>
        </Reveal>
        <Stagger className="ref-cards">
          {benefits.map(([icon, title, copy]) => (
            <StaggerItem key={title}>
              <article>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function RegistrationAgenda() {
  return (
    <section className="ref-section ref-agenda">
      <div className="ref-wrap">
        <Reveal className="ref-section-title ref-centered">
          <p>LA AGENDA DEL CAMBIO</p>
          <h2>
            Dos días intensos de
            <br />
            conocimiento y acción.
          </h2>
        </Reveal>
        <div className="ref-days">
          <Reveal>
            <article>
              <b>DÍA 1</b>
              <h3>El Diagnóstico y el Contexto</h3>
              <ul>
                <li>Registro y bienvenida</li>
                <li>Aspectos legales de la salud mental</li>
                <li>Panorama nacional desde la Personería</li>
                <li>Hilo 1: Infancia y adolescencia</li>
                <li>Hilo 2: Mayoría de edad, estudios y primer empleo</li>
                <li>Hilo 3: Salud y Seguridad en el Trabajo (SST)</li>
                <li>Hilo 4: Adultez mayor y condiciones crónicas</li>
              </ul>
              <p className="ref-green-note">
                Aprenderás sobre primeros auxilios psicológicos, atención
                temprana en la comunidad y el hogar
              </p>
            </article>
          </Reveal>
          <Reveal>
            <article className="ref-day-two">
              <b>DÍA 2</b>
              <h3>Hacia la Acción y el Futuro</h3>
              <ul>
                <li>El Gran Panel Nacional</li>
                <li>Creación del Banco de Proyectos 2027</li>
                <li>Firma de la Declaración del Congreso</li>
                <li>Conclusiones y recomendaciones</li>
                <li>Estrategia de Articulación Nacional y Networking</li>
              </ul>
              <p className="ref-green-note">
                Conecta con actores clave: personeros nacionales, líderes,
                academia y empresas para generar soluciones conjuntas por el
                país.
              </p>
            </article>
          </Reveal>
        </div>
        <a className="ref-green-button" href="#registro">
          Quiero ser parte de esta declaración. ¡Inscribirme!
        </a>
      </div>
    </section>
  );
}

export function RegistrationForm({
  frameRef,
  confirmed,
  handleFrameLoad,
}: {
  frameRef: RefObject<HTMLIFrameElement | null>;
  confirmed: boolean;
  handleFrameLoad: () => void;
}) {
  return (
    <section id="registro" className="ref-section ref-registration">
      <div className="ref-wrap">
        <Reveal className="ref-section-title ref-centered">
          <p>CUPOS SIN COSTO</p>
          <h2>Completa tu Inscripción Gratuita</h2>
          <span>
            Tu participación fortalece la conversación nacional sobre salud
            mental integral.
          </span>
        </Reveal>
        {confirmed && (
          <div
            className="registration-success"
            role="status"
            aria-live="polite"
          >
            <strong>¡Gracias por registrarte al evento!</strong>
            <span>
              Tu inscripción fue recibida. Te estamos redirigiendo a los
              detalles del evento.
            </span>
          </div>
        )}
        <Reveal className="ref-iframe">
          <iframe
            ref={frameRef}
            onLoad={handleFrameLoad}
            src="https://www.proshareapp.com/es/embed/@veesipp/eventos/congreso-salud-mental-2026"
            title="Formulario de inscripción al Congreso Nacional de Salud Mental Integral"
            style={{ width: "100%", minHeight: "720px", border: 0 }}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Reveal>
        <p className="ref-free-note">
          La inscripción es gratuita y los cupos son personales, limitados e
          intransferibles.
        </p>
      </div>
    </section>
  );
}

export function RegistrationEventInfo() {
  return (
    <section className="ref-event-info">
      <div className="ref-wrap">
        <Reveal className="ref-section-title ref-centered">
          <p>ENCUENTRO PRESENCIAL</p>
          <h2>Información del Evento</h2>
        </Reveal>
        <div className="ref-info-grid">
          <article>
            <span>▣</span>
            <p>
              <b>22 y 23 de octubre de 2026.</b> Auditorio de la Universidad del
              Tolima, Sede Calle 10. Ibagué, Colombia.
            </p>
          </article>
          <article>
            <span>⌖</span>
            <p>
              <u>Ubicación del Auditorio — consultar en Google Maps</u>
            </p>
          </article>
        </div>
        <div className="ref-sponsors">
          <strong>Aliados y patrocinadores</strong>
          <span>Espacios reservados para los logos de patrocinadores</span>
        </div>
        <div className="ref-legal">
          <u>Política de Privacidad</u>
          <u>Términos y Condiciones de Uso de Datos</u>
        </div>
      </div>
    </section>
  );
}
