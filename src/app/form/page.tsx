import Image from "next/image";
import NewGuestForm from "../components/NewGuestForm";

export default function FormPage() {
  return (
    <div className="flex flex-col justify-center items-center mx-11 my-24 gap-6">
      <div className="relative flex flex-col justify-center items-center mb-48 px-16 gap-11">
        <h1 className="font-breathing text-secondary text-center text-3xl leading-16">
          Confirma tu asistencia
        </h1>
        <div className="flex flex-col items-center gap-11">
          <div>
            <p className="font-catchy text-primary text-center text-xl ">
              Nos encantaría contar contigo en este día tan especial.
            </p>
            <p className="font-catchy text-primary text-center text-xl">
              Si puedes acompañarnos, por favor, rellena este formulario para
              reservar tu asiento.
            </p>
          </div>
          <p className="font-catchy text-secondary text-center text-2xl">
            Te pedimos que confirmes tu asistencia antes del 5 de enero de 2026
          </p>
          <Image
            src="/lazo-azul-claro.png"
            alt="lazo-azul-claro"
            width={312}
            height={440}
            className="absolute rotate-90 scale-x-[-1] top-92 w-64"
          />
        </div>
      </div>
      <NewGuestForm />
    </div>
  );
}
