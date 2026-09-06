import type { Metadata } from "next";
import LegalPage from "../../src/views/Legal/LegalPage";

export const metadata: Metadata = { title: "Política de Tratamiento de Datos Personales | VEESIPP Colombia", description: "Conoce cómo VEESIPP Colombia trata y protege los datos personales." };

export default function Page() { return <div id="inicio"><LegalPage policy="treatment" /></div>; }
