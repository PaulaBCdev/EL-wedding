import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary h-46 lg:h-52 overflow-hidden">
      {/* Mobile & Tablet */}
      <div className="relative flex lg:hidden justify-center items-center h-full my-2 py-2">
        <Image
          src="/lazo-blanco.svg"
          alt="lazo-blanco"
          fill
          className="object-cover opacity-15"
        />

        <p className="font-breathing text-background text-3xl">
          Esteban y Leire
        </p>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-center h-full gap-36 mx-40 ">
        <Image
          src="/lazo-blanco.svg"
          alt="lazo-blanco"
          width={98}
          height={568}
          className="w-64"
        />
        <p className="font-breathing text-background text-3xl">
          Esteban y Leire
        </p>
        <Image
          src="/lazo-blanco.svg"
          alt="lazo-blanco"
          width={98}
          height={568}
          className="scale-x-[-1] w-64"
        />
      </div>
    </footer>
  );
}
