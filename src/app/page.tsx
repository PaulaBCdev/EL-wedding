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
        <div className="flex flex-col gap-22 mx-20">
          <div className="flex flex-col justify-center items-center gap-12">
            <p className="font-albert text-secondary text-2xl">Cuándo</p>
            <p className="font-catchy text-background text-4xl text-center">
              Viernes 20 de febrero de 2026
            </p>
          </div>

          {/* timeline */}
          <ul className="timeline timeline-vertical">
            <li>
              <hr className="bg-secondary/50" />
              <div className="timeline-middle">
                <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
              </div>
              <div className="timeline-start font-catchy text-background text-xl text-center py-4 px-4">
                <p>Recepción de invitados</p>
                <p>18:00</p>
              </div>
              <hr className="bg-secondary/50" />
            </li>

            <li>
              <hr className="bg-secondary/50" />
              <div className="timeline-middle">
                <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
              </div>
              <div className="timeline-end font-catchy text-background text-xl text-center py-4 px-4">
                <p>Ceremonia</p>
                <p>18:30</p>
              </div>
              <hr className="bg-secondary/50" />
            </li>

            <li>
              <hr className="bg-secondary/50" />
              <div className="timeline-middle">
                <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
              </div>
              <div className="timeline-start font-catchy text-background text-xl text-center py-4 px-4">
                <p>Cocktail de bienvenida</p>
                <p>19:30</p>
              </div>
              <hr className="bg-secondary/50" />
            </li>

            <li>
              <hr className="bg-secondary/50" />
              <div className="timeline-middle">
                <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
              </div>
              <div className="timeline-end font-catchy text-background text-xl text-center px-4">
                <p>Cena en salón</p>
                <p>21:00</p>
              </div>
              <hr className="bg-secondary/50" />
            </li>
          </ul>
        </div>
      </section>

      {/* Desktop */}
      <section>
        <article className="relative overflow-hidden hidden lg:flex justify-center items-center bg-primary w-full h-[1214px]">
          <div className="flex flex-col gap-40 mx-20">
            <div className="flex flex-col justify-center items-center gap-12">
              <p className="font-albert text-secondary text-2xl">Cuándo</p>
              <p className="font-catchy text-background text-6xl text-center">
                Viernes 20 de febrero de 2026
              </p>
            </div>

            {/* timeline */}
            <ul className="timeline overflow-x-auto">
              {/* up */}
              <li>
                <hr className="bg-secondary/50" />
                <div className="timeline-start text-center font-catchy text-background text-2xl">
                  <p>Recepción de invitados</p>
                  <p>18:00</p>
                </div>
                <div className="timeline-middle">
                  <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
                </div>
                <hr className="bg-secondary/50" />
              </li>

              {/* down */}
              <li>
                <hr className="bg-secondary/50" />
                <div className="timeline-middle">
                  <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
                </div>
                <div className="timeline-end text-center font-catchy text-background text-2xl">
                  <p>Ceremonia</p>
                  <p>18:30</p>
                </div>
                <hr className="bg-secondary/50" />
              </li>

              {/* up */}
              <li>
                <hr className="bg-secondary/50" />
                <div className="timeline-start font-catchy text-center text-background text-2xl">
                  <p>Cocktail de bienvenida</p>
                  <p>19:30</p>
                </div>
                <div className="timeline-middle">
                  <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
                </div>
                <hr className="bg-secondary/50" />
              </li>

              {/* down */}
              <li>
                <hr className="bg-secondary/50" />
                <div className="timeline-middle">
                  <span className="bg-secondary flex size-4.5 items-center justify-center rounded-full"></span>
                </div>
                <div className="timeline-end font-catchy text-center text-background text-2xl">
                  <p>Cena en salón</p>
                  <p>21:00</p>
                </div>
                <hr className="bg-secondary/50" />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
