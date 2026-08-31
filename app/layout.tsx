import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = {
  title: "VEESIPP Colombia",
  description: "Veeduría ciudadana en salud",
  icons: {
    icon: "/LOGO_VEESIPP_COLOMBIA.png",
    shortcut: "/LOGO_VEESIPP_COLOMBIA.png",
    apple: "/LOGO_VEESIPP_COLOMBIA.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
