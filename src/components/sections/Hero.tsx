import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Vigilando, participando y transformando el bienestar integral de las
          comunidades.
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
          Trabajamos por la defensa del derecho a la salud, la participación
          ciudadana, la transparencia, vigilancia y control social con un
          enfoque en salud integral y salud mental.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button>Conoce nuestro trabajo</Button>
          <Button variant="ghost">Quiero participar</Button>
        </div>
      </div>
    </section>
  );
}
