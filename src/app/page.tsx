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
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="relative w-[110%] max-w-[600px] h-full scale-110 translate-x-5   translate-y-[330px] md:scale-110 md:translate-x-0 md:translate-y-[250px]">
            <Image
              src="/lazo-azul-claro.svg"
              alt="lazo-azul-claro"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className=" relative z-10 flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col justify-center items-center mx-8 mb-52 md:mb-60 gap-14 z-10">
            <p className="font-catchy text-secondary text-4xl text-center px-16">
              Nos complace invitarte a celebrar nuestro matrimonio con nosotros.
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
        </div>
      </section>
      {/* Desktop */}
      <section className="relative overflow-hidden hidden lg:flex justify-center items-center bg-background w-full h-1/4">
        <div className="flex flex-col justify-center items-center my-44 max-w-[950px] gap-32 z-10">
          <p className="font-catchy text-6xl text-secondary text-center">
            Nos complace invitarte a celebrar nuestro matrimonio con nosotros.
          </p>

          <div className="flex justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center pb-4">
              <hr className="bg-secondary w-44 h-0.5" />
              <p className="font-catchy text-secondary text-4xl mt-1">
                Febrero
              </p>
              <hr className="bg-secondary w-44 h-0.5" />
            </div>

            <p className="font-catchy text-secondary text-8xl">20</p>

            <div className="flex flex-col justify-center items-center pb-4">
              <hr className="bg-secondary w-44 h-0.5" />
              <p className="font-catchy text-secondary text-4xl mt-1">
                18 hrs.
              </p>
              <hr className="bg-secondary w-44 h-0.5" />
            </div>
          </div>

          <p className="font-catchy text-3xl text-secondary text-center mx-9">
            Hemos preparado una ceremonia íntima por la tarde, seguida de un
            cóctel y una cena en compañía de nuestros seres queridos. No hay
            código de vestimenta; solo ten en cuenta el frío de febrero.
          </p>
        </div>

        <div>
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-70 z-0 w-[500px] scale-x-[-1] rotate-35 -bottom-[260px] -left-20"
          />
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-70 z-0 w-[500px] scale-x-[-1] -rotate-145 -top-34 -right-32"
          />
        </div>
      </section>

      {/* BLOQUE 3
      PARTE 1 */}
      {/* Mobil & Tablet */}
      <section className="flex justify-center items-center lg:hidden bg-primary w-full h-[1214px]">
        <div>
          <div className="flex flex-col justify-center items-center gap-12">
            <p className="font-albert text-secondary text-2xl">Cuándo</p>
            <p className="font-catchy text-background text-4xl text-center">
              Viernes 20 de febrero de 2026
            </p>
          </div>

          {/* timeline */}
          <div className="container">
            <div className="grid grid-cols-9 mx-auto p-2 text-secondary">
              {/* left */}
              <div className="contents">
                <div className="bg-secondary col-start-1 col-end-4 p-3 rounded-xl my-4 ml-auto shadow-md">
                  <p className="font-catchy text-background text-lg text-center">
                    Recepción de invitados
                  </p>
                  <p className="font-catchy text-background text-lg text-center">
                    18:00
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-secondary pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"></div>
                </div>
              </div>

              {/* right */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
