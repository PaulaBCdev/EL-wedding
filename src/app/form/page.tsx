import Image from "next/image";
import NewGuestForm from "../components/NewGuestForm";

export default function FormPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-24 lg:my-48 gap-20 lg:gap-32">
      <div className="flex flex-col justify-center items-center max-w-xl md:max-w-2xl lg:max-w-5xl px-28 gap-11 lg:gap-32">
        <h1 className="font-breathing text-secondary text-center text-4xl lg:text-6xl leading-16">
          Confirma tu asistencia
        </h1>
        <div className="flex flex-col items-center gap-11 lg:gap-24">
          <div>
            <p className="font-catchy text-primary text-center text-xl lg:text-4xl ">
              Nos encantaría contar contigo en este día tan especial.
            </p>
            <p className="font-catchy text-primary text-center text-xl lg:text-4xl">
              Si puedes acompañarnos, por favor, rellena este formulario para
              reservar tu asiento.
            </p>
          </div>
          <p className="font-catchy text-secondary text-center text-2xl lg:text-5xl">
            Te pedimos que confirmes tu asistencia antes del 5 de enero de 2026
          </p>
        </div>
      </div>
      <Image
        src="/lazo-azul-claro.svg"
        alt="lazo-azul-claro"
        width={98}
        height={568}
        className="w-80 lg:w-xl"
      />
      <NewGuestForm />
    </div>
  );
}

/* flex flex-col justify-center items-center max-w-xl mb-48 px-16 gap-11*/
