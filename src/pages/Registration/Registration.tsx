import { useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const PROSHARE_ORIGIN = "https://www.proshareapp.com";

export default function Registration() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeEmbed = (event: MessageEvent) => {
      if (event.origin !== PROSHARE_ORIGIN) return;
      if (!event.data || event.data.source !== "proshare-event-embed") return;
      if (event.data.type !== "resize") return;

      const frame = frameRef.current;
      if (frame && typeof event.data.height === "number") {
        frame.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", resizeEmbed);
    return () => window.removeEventListener("message", resizeEmbed);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="section registration-section">
          <div className="page-wrap">
            <div className="section-intro">
              <h1 className="heading">Reg&iacute;strate al congreso</h1>
              <p className="body-copy">
                Completa tu inscripci&oacute;n para participar.
              </p>
            </div>
            <section className="event-summary" aria-labelledby="event-title">
              <p className="eyebrow">Sobre el evento</p>
              <h2 id="event-title" className="heading">Congreso de Salud Mental 2026</h2>
              <p className="event-date">5 de octubre de 2026</p>
              <p className="body-copy">El Congreso Demo VEESIPP re&uacute;ne a veedur&iacute;as ciudadanas, organizaciones de la sociedad civil, aliados institucionales y ciudadanos comprometidos con el fortalecimiento de la participaci&oacute;n y el control social en Colombia.</p>
              <p className="body-copy">Durante tres d&iacute;as habr&aacute; conferencias, talleres, espacios de di&aacute;logo y networking para compartir experiencias, conocimientos y herramientas que impulsen una ciudadan&iacute;a m&aacute;s activa, informada y participativa.</p>
            </section>
            <iframe
              ref={frameRef}
              id="proshare-event-embed"
              src="https://www.proshareapp.com/es/embed/@veesipp/eventos/congreso-salud-mental-2026"
              title="Inscripci&oacute;n Congreso de Salud Mental 2026"
              style={{ width: "100%", border: 0, minHeight: "720px" }}
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
