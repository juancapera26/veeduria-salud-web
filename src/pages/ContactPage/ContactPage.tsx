import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return <div className="site-shell"><Navbar /><main>
    <section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">Contacto</p><h1 className="display">Estamos para escucharte.</h1><p className="body-copy">Cada comunicación es importante para nosotros. Escríbenos y te orientaremos con cercanía y respeto.</p><div className="soft-panel"><p className="card-copy">Correo: <a href="mailto:veesipp@veesippcolombia.com">veesipp@veesippcolombia.com</a></p><p className="card-copy">Teléfonos: <a href="tel:+573163587515">316 358 7515</a> · <a href="tel:+573002186531">300 218 6531</a></p><p className="card-copy">Dirección: Avenida Ambalá No. 90-04 C 38</p></div></div><form className="statement-card stack" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><h2 className="card-title">Envíanos un mensaje</h2><input required placeholder="Nombre" className="w-full rounded-xl border border-[#d9f1ee] p-3"/><input required type="email" placeholder="Correo electrónico" className="w-full rounded-xl border border-[#d9f1ee] p-3"/><textarea required rows={5} placeholder="Mensaje" className="w-full resize-none rounded-xl border border-[#d9f1ee] p-3"/>{sent && <p className="card-copy">Mensaje enviado. Te responderemos pronto.</p>}<button className="button button--coral" type="submit">Enviar mensaje <span>→</span></button></form></div></section>
  </main><Footer /></div>;
}
