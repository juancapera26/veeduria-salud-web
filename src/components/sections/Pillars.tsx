import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const items = [
  {
    key: "vigilancia",
    title: "Vigilancia",
    icon: "👁️",
    desc: "Observación y supervisión ciudadana para garantizar derechos en salud.",
  },
  {
    key: "seguimiento",
    title: "Seguimiento",
    icon: "🔎",
    desc: "Acompañamiento y monitoreo de procesos y compromisos institucionales.",
  },
  {
    key: "control",
    title: "Control Social",
    icon: "🤝",
    desc: "Participación activa de la ciudadanía para exigir transparencia y resultados.",
  },
];

export default function Pillars() {
  return (
    <section id="que-hacemos" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Nuestros ejes de trabajo</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.key}>
              <div className="text-4xl mb-3">{it.icon}</div>
              <h4 className="font-semibold mb-2">{it.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {it.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
