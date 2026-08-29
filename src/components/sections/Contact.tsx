import SectionTitle from '../ui/SectionTitle'
import site from '../../config/site'

export default function Contact() {
  return (
    <section id="contacto" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Contacto</SectionTitle>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Correo: {site.email} — Teléfono: {site.phone}</p>
        <a href={`mailto:${site.email}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Escríbenos</a>
      </div>
    </section>
  )
}
