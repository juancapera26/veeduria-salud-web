import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

type Policy = "treatment" | "privacy";

const policyContent = {
  treatment: {
    eyebrow: "Protección de la información",
    title: "Política de Tratamiento de Datos Personales",
    intro: "En VEESIPP Colombia protegemos la información personal con responsabilidad, transparencia y respeto por los derechos de sus titulares.",
    sections: [
      ["1. Responsable del tratamiento", "El responsable del tratamiento de los datos personales es VEESIPP Colombia, organización ciudadana dedicada a la vigilancia, participación y control social en salud.", "Canales de atención: veesipp@veesippcolombia.com, teléfono 316 358 7515 y dirección Avenida Ambalá, Colombia."],
      ["2. Alcance y marco aplicable", "Esta política aplica a los datos personales que recopilamos a través de este sitio web, formularios, actividades, eventos y demás canales de atención de VEESIPP Colombia.", "El tratamiento se realiza de acuerdo con la normativa colombiana aplicable sobre protección de datos personales, en especial la Ley 1581 de 2012 y sus normas reglamentarias o complementarias."],
      ["3. Datos que podemos tratar", "Podemos tratar datos de identificación y contacto, como nombre, correo electrónico, teléfono, ciudad y la información que voluntariamente incluyas en una solicitud, PQRS, registro o mensaje.", "Te pedimos no incluir datos sensibles o información de terceros que no sean necesarios para atender tu solicitud. Cuando excepcionalmente sea necesario tratar datos sensibles, solicitaremos la autorización correspondiente y aplicaremos medidas reforzadas de protección."],
      ["4. Finalidades del tratamiento", "Usamos los datos para atender peticiones, quejas, reclamos y sugerencias; responder consultas; gestionar inscripciones y participaciones en actividades; enviar comunicaciones relacionadas con los servicios solicitados; y mantener la trazabilidad de la atención.", "También podremos usar información anonimizada o agregada para elaborar informes, fortalecer la participación ciudadana y mejorar nuestros contenidos y servicios, sin identificar individualmente a sus titulares."],
      ["5. Derechos del titular", "Como titular puedes conocer, actualizar, rectificar y solicitar la supresión de tus datos; pedir prueba de la autorización; conocer el uso que se les ha dado; presentar consultas o reclamos; y revocar la autorización cuando sea procedente.", "Las solicitudes deben enviarse a veesipp@veesippcolombia.com e indicar el nombre del titular, la descripción de la solicitud y los datos necesarios para responderla. Atenderemos la solicitud dentro de los términos previstos por la ley."],
      ["6. Seguridad, conservación y terceros", "Adoptamos medidas razonables de seguridad administrativas, técnicas y físicas para evitar pérdida, alteración, acceso, uso o divulgación no autorizados.", "Conservaremos la información durante el tiempo necesario para cumplir las finalidades informadas, atender obligaciones legales y ejercer derechos. Cuando acudamos a proveedores que apoyen la operación del sitio, exigiremos el manejo de la información conforme a la normativa aplicable."],
      ["7. Cambios y vigencia", "Podremos actualizar esta política para reflejar cambios legales, operativos o en nuestros servicios. La versión vigente estará publicada en este sitio e indicará su fecha de actualización.", "Esta política rige a partir del 6 de septiembre de 2026."],
    ],
  },
  privacy: {
    eyebrow: "Navegación responsable",
    title: "Política de Privacidad",
    intro: "Esta política explica cómo cuidamos tu privacidad cuando visitas el sitio web y te comunicas con VEESIPP Colombia.",
    sections: [
      ["1. Qué información recopilamos", "Recopilamos la información que decides entregar al diligenciar un formulario, enviar una PQRS, solicitar orientación, inscribirte en una actividad o contactarnos por correo o teléfono.", "El sitio también puede recibir datos técnicos básicos de navegación, como tipo de dispositivo, navegador y páginas consultadas, cuando sean necesarios para la seguridad y el funcionamiento del servicio."],
      ["2. Para qué usamos la información", "La utilizamos para prestar los servicios solicitados, responder comunicaciones, gestionar actividades y eventos, proteger el sitio, mejorar la experiencia de navegación y cumplir obligaciones legales.", "No utilizamos la información para fines incompatibles con el motivo por el que fue entregada. Si proponemos una finalidad nueva que requiera autorización, la solicitaremos previamente."],
      ["3. Enlaces y servicios de terceros", "El sitio puede incluir enlaces a redes sociales, mapas, formularios o páginas de terceros. Al abrirlos, aplicarán las políticas de privacidad y condiciones de esos terceros; te recomendamos revisarlas antes de compartir información.", "No controlamos las prácticas de privacidad de sitios externos y no somos responsables por el contenido o tratamiento que realicen fuera de nuestros canales."],
      ["4. Cookies y tecnologías similares", "Podemos utilizar tecnologías necesarias para que el sitio funcione correctamente, recordar preferencias básicas y obtener métricas generales de uso. Estas herramientas no deben utilizarse para solicitar información sensible.", "Puedes administrar o bloquear cookies desde la configuración de tu navegador. Algunas funciones podrían no operar de la misma manera si deshabilitas tecnologías necesarias."],
      ["5. Cómo protegemos tu información", "Limitamos el acceso a la información a las personas y proveedores que la necesitan para atender las finalidades informadas. Aplicamos controles razonables para prevenir accesos o usos no autorizados.", "Ningún canal digital es completamente infalible. Si detectamos un incidente que pueda afectar tus datos, actuaremos conforme a la normativa aplicable y adoptaremos medidas de contención y mejora."],
      ["6. Tus opciones y contacto", "Puedes solicitar información sobre el uso de tus datos, actualizarlos, corregirlos, pedir su eliminación o revocar autorizaciones cuando corresponda. Para ejercer estos derechos, escríbenos a veesipp@veesippcolombia.com.", "Para conocer en detalle las reglas aplicables al tratamiento de datos personales, consulta nuestra Política de Tratamiento de Datos Personales."],
      ["7. Actualizaciones", "Podemos modificar esta política para mantenerla alineada con cambios en el sitio, nuestros servicios o la normativa. Publicaremos aquí la versión vigente y su fecha de actualización.", "Esta política rige a partir del 6 de septiembre de 2026."],
    ],
  },
} as const;

export default function LegalPage({ policy }: { policy: Policy }) {
  const content = policyContent[policy];
  const otherPolicy = policy === "privacy" ? "/politica-tratamiento-datos" : "/politica-privacidad";
  const otherLabel = policy === "privacy" ? "Política de Tratamiento de Datos Personales" : "Política de Privacidad";

  return <div className="site-shell legal-page"><Navbar /><main><section className="legal-hero"><div className="page-wrap"><p className="eyebrow">{content.eyebrow}</p><h1 className="display">{content.title}</h1><p className="legal-intro">{content.intro}</p><p className="legal-updated">Última actualización: 6 de septiembre de 2026</p></div></section><section className="legal-content section"><div className="page-wrap legal-layout"><aside className="legal-aside" aria-label="Navegación de políticas"><p className="eyebrow">Documentos relacionados</p><Link className={policy === "privacy" ? "is-current" : ""} href="/politica-privacidad">Política de Privacidad</Link><Link className={policy === "treatment" ? "is-current" : ""} href="/politica-tratamiento-datos">Tratamiento de Datos Personales</Link></aside><article className="legal-document">{content.sections.map(([title, ...paragraphs]) => <section key={title}><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="legal-next-step"><p>También puedes consultar:</p><Link className="button button--outline" href={otherPolicy}>{otherLabel} <span>→</span></Link></div></article></div></section></main><Footer /></div>;
}
