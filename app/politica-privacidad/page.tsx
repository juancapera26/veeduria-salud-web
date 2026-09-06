import type { Metadata } from "next";
import LegalPage from "../../src/views/Legal/LegalPage";

export const metadata: Metadata = { title: "Política de Privacidad | VEESIPP Colombia", description: "Conoce cómo VEESIPP Colombia protege tu privacidad en este sitio web." };

export default function Page() { return <div id="inicio"><LegalPage policy="privacy" /></div>; }
