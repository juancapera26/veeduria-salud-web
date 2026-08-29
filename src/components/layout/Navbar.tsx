import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-veesipp-colombia.png";

const links = [
  { to: "/", label: "Inicio" }, { to: "/nosotros", label: "Nosotros" },
  { to: "/que-hacemos", label: "Qué hacemos" }, { to: "/salud-mental", label: "Salud mental" },
  { to: "/participacion", label: "Participación" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 1101px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setOpen(false);
    };

    closeMenuOnDesktop(desktopViewport);
    desktopViewport.addEventListener("change", closeMenuOnDesktop);
    return () => desktopViewport.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  return <header className="site-header">
    <div className="page-wrap nav-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><img className="brand-logo" src={logo} alt="VEESIPP Colombia" /></Link>
      <nav className="nav-links" aria-label="Navegación principal">{links.map((link) => <Link key={link.to} to={link.to} aria-current={pathname === link.to ? "page" : undefined}>{link.label}</Link>)}</nav>
      <a className="button button--coral nav-cta" href="/#pqrs">Presentar una PQRS</a>
      <button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
    </div>
    {open && <nav className="page-wrap mobile-nav" aria-label="Navegación móvil">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="button button--coral" href="/#pqrs" onClick={() => setOpen(false)}>Presentar una PQRS</a></nav>}
  </header>;
}
