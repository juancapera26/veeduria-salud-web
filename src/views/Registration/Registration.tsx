"use client";

import Link from "next/link";
import { useRegistrationEmbed } from "../../hooks/useRegistrationEmbed";
import {
  RegistrationAgenda,
  RegistrationBenefits,
  RegistrationEventInfo,
  RegistrationForm,
  RegistrationHero,
} from "../../components/registration/RegistrationSections";

export default function Registration() {
  const { frameRef, confirmed, handleFrameLoad } = useRegistrationEmbed();
  return (
    <div className="congreso-reference-page">
      <main>
        <RegistrationHero />
        <section className="ref-alert">
          <div className="ref-wrap">
            <p className="ref-backed">
              Congreso Nacional de Salud Mental con el respaldo oficial de
              VEESIPP y la Personería de Ibagué
            </p>
            <span>⚠️</span>
            <p>
              <strong>Importante:</strong> El registro en esta web es el primer
              paso.{" "}
              <b>
                Para recibir tu certificado, la asistencia presencial es
                obligatoria
              </b>{" "}
              y se validará mediante registro digital en el evento. ¡Cupos
              limitados para el panel nacional!
            </p>
          </div>
        </section>
        <RegistrationBenefits />
        <RegistrationAgenda />
        <RegistrationForm
          frameRef={frameRef}
          confirmed={confirmed}
          handleFrameLoad={handleFrameLoad}
        />
        <RegistrationEventInfo />
        <section className="registration-policy-links">
          <Link href="/politica-privacidad">Política de Privacidad</Link>
          <Link href="/politica-tratamiento-datos">
            Tratamiento de Datos Personales
          </Link>
        </section>
      </main>
    </div>
  );
}
