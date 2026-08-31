"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo-veesipp-colombia.png";

const links = [
  { to: "/", label: "Inicio" }, { to: "/nosotros", label: "Nosotros" },
  { to: "/que-hacemos", label: "Qué hacemos" }, { to: "/salud-mental", label: "Salud mental" },
  { to: "/participacion", label: "Participación" }, { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 1101px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setOpen(false);
    };

    closeMenuOnDesktop(desktopViewport);
    desktopViewport.addEventListener("change", closeMenuOnDesktop);
    return () => desktopViewport.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  return <motion.header className="site-header" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
    <div className="page-wrap nav-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><img className="brand-logo" src={logo.src} alt="VEESIPP Colombia" /></Link>
      <nav className="nav-links" aria-label="Navegación principal">{links.map((link) => <Link key={link.to} href={link.to} aria-current={pathname === link.to ? "page" : undefined}>{link.label}</Link>)}</nav>
      <a className="button button--coral nav-cta" href="/#pqrs">Presentar una PQRS</a>
      <motion.button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)} whileTap={reduceMotion ? undefined : { scale: .92 }}>{open ? "×" : "☰"}</motion.button>
    </div>
    <AnimatePresence initial={false}>{open && <motion.nav className="page-wrap mobile-nav" aria-label="Navegación móvil" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: .24 }}>{links.map((link, index) => <motion.div key={link.to} initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }}><Link href={link.to} onClick={() => setOpen(false)}>{link.label}</Link></motion.div>)}<a className="button button--coral" href="/#pqrs" onClick={() => setOpen(false)}>Presentar una PQRS</a></motion.nav>}</AnimatePresence>
  </motion.header>;
}
