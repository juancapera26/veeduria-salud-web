"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function PQRS() {
  const [sent, setSent] = useState(false);
  return <div className="site-shell"><Navbar /><main><section className="section"><div className="page-wrap split"><div className="stack"><p className="eyebrow">PQRS</p><h1 className="display">Cuéntanos tu situación.</h1><p className="body-copy">Estamos para escucharte, orientarte y acompañarte. Completa la información que consideres importante.</p><p className="card-copy">Petición · Queja · Reclamo · Sugerencia</p></div><form className="statement-card stack" onSubmit={(event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }}><h2 className="card-title">Presentar una PQRS</h2><input required placeholder="Nombre completo" className="w-full rounded-xl border border-[#d9f1ee] p-3"/><input required type="email" placeholder="Correo electrónico" className="w-full rounded-xl border border-[#d9f1ee] p-3"/><select className="w-full rounded-xl border border-[#d9f1ee] p-3" defaultValue="Petición"><option>Petición</option><option>Queja</option><option>Reclamo</option><option>Sugerencia</option></select><textarea required rows={5} placeholder="Describe tu caso" className="w-full resize-none rounded-xl border border-[#d9f1ee] p-3"/>{sent && <p className="card-copy">PQRS enviada correctamente. Recibirás confirmación en tu correo.</p>}<button className="button button--coral" type="submit">Enviar PQRS <span>→</span></button></form></div></section></main><Footer /></div>;
}
