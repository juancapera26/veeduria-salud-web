"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import logo from "../../assets/logo-veesipp-colombia.png";

export default function Footer() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.footer className="site-footer" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .5 }}>
      <div className="page-wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <img className="brand-logo" src={logo.src} alt="VEESIPP Colombia" />
            </Link>
            <p>
              Vigilando, participando y transformando el bienestar integral de
              las comunidades.
            </p>
          </div>
          <div>
            <h4>Explora</h4>
            <ul>
              <li>
                <a href="/#inicio">Inicio</a>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/que-hacemos">Servicios</Link>
              </li>
              <li>
                <Link href="/salud-mental">Salud mental</Link>
              </li>
              <li>
                <Link href="/participacion">Participación ciudadana</Link>
              </li>
              <li>
                <a href="/#pqrs">PQRS</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>Avenida Ambalá No. 90-04 C 38</li>
              <li>316 358 7515 · 300 218 6531</li>
              <li>
                <a href="mailto:veesipp@veesippcolombia.com">
                  veesipp@veesippcolombia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} VEESIPP Colombia. Todos los derechos
            reservados.
          </span>
          <span>Política de privacidad · Tratamiento de datos</span>
        </div>
      </div>
    </motion.footer>
  );
}
