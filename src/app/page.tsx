import Image from "next/image";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="relative flex flex-col h-full w-full">
      {/* BLOQUE 1 */}
      {/* Mobile & Tablet */}
      <section className="relative overflow-hidden flex justify-center items-center lg:hidden bg-primary w-full h-[800px]">
        <div className="flex flex-col justify-center items-center gap-36 mx-16 mb-10 z-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <p className="font-catchy text-background text-3xl md:text-4xl">
              — 20.02.2026 —
            </p>
            <h1 className="font-breathing text-background text-5xl md:text-7xl text-center leading-24">
              Esteban y Leire
            </h1>
            <p className="font-catchy text-background text-3xl md:text-4xl">
              ¡Nos casamos!
            </p>
          </div>
          <Button className="font-albert font-medium text-background text-xl py-7 px-14" />
        </div>

        <Image
          src="/flor.svg"
          alt="flor"
          width={908}
          height={1280}
          className="absolute opacity-40 z-0 w-[370px] -rotate-150 -top-[360px] -right-52"
        />
        <Image
          src="/flor.svg"
          alt="flor"
          width={908}
          height={1280}
          className="absolute opacity-40 z-0 w-[370px] -rotate-33 -bottom-36 -left-2"
        />
      </section>
      {/* Desktop */}
      <section className="relative overflow-hidden hidden lg:flex justify-center items-center bg-primary w-full h-[780px]">
        <div className="flex flex-col justify-center items-center gap-32 mx-16 mb-10 z-10">
          <div className="flex flex-col justify-center items-center gap-24">
            <p className="font-catchy text-background text-4xl">
              — 20.02.2026 —
            </p>
            <h1 className="font-breathing text-background text-8xl text-center leading-24">
              Esteban y Leire
            </h1>
            <p className="font-catchy text-background text-4xl">
              ¡Nos casamos!
            </p>
          </div>
          <Image
            src="/lazo-blanco.svg"
            alt="lazo-blanco"
            width={98}
            height={568}
            className="w-96"
          />
        </div>
        <div>
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-70 z-0 w-[450px] -rotate-21 -bottom-28 left-16"
          />
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-70 z-0 w-[450px] scale-x-[-1] rotate-21 -bottom-28 right-16"
          />
        </div>
      </section>

      {/* BLOQUE 2 */}
      {/* Mobile & Tablet */}
      <section className="relative overflow-hidden flex justify-center items-center lg:hidden bg-background w-full h-[956px]">
        <div className="flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col justify-center items-center lg:hidden mx-8 gap-14 z-10">
            <p className="font-catchy text-secondary text-4xl text-center px-16">
              Nos complace invitarte a celebrar nuestro matrimonio con nosotros
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-col justify-center items-center pb-4">
                <hr className="bg-secondary w-32 h-0.5" />
                <p className="font-catchy text-secondary text-2xl mt-1">
                  Febrero
                </p>
                <hr className="bg-secondary w-32 h-0.5" />
              </div>

              <p className="font-catchy text-secondary text-6xl">20</p>

              <div className="flex flex-col justify-center items-center pb-4">
                <hr className="bg-secondary w-32 h-0.5" />
                <p className="font-catchy text-secondary text-2xl mt-1">
                  18 hrs.
                </p>
                <hr className="bg-secondary w-32 h-0.5" />
              </div>
            </div>
            <p className="font-catchy text-secondary text-2xl text-center px-16">
              Hemos preparado una ceremonia íntima por la tarde, seguida de un
              cóctel y una cena en compañía de nuestros seres queridos. No hay
              código de vestimenta; solo ten en cuenta el frío de febrero.
            </p>
          </div>
          <Image
            src="/lazo-azul-claro.svg"
            alt="lazo-azul-claro"
            width={98}
            height={568}
            className="w-5xl"
          />
        </div>
      </section>
    </main>
  );
}
