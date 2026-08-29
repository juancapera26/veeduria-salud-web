import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const services = [
  'Defensa de los derechos en salud',
  'Vigilancia ciudadana',
  'Seguimiento a EPS e IPS',
  'Salud mental comunitaria',
  'Educación en derechos',
  'Orientación al usuario',
  'Recepción y análisis de casos',
  'Participación ciudadana',
  'Acompañamiento institucional',
  'Control social',
]

export default function Services() {
  return (
    <section id="servicios" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Líneas de trabajo</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <Card key={s}>
              <h5 className="font-medium mb-2">{s}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">Descripción provisional sobre la línea de trabajo.</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
