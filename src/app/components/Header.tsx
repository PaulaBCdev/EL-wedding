import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="bg-primary w-full h-32 lg:h-40">
      {/* Mobile & Tablet */}
      <div className="flex lg:hidden justify-center items-center h-full">
        <p className="font-breathing text-background text-4xl">E & L</p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center h-full mx-24">
        <Link href="" className="font-albert text-background text-96 pr-14">
          Cuándo y dónde
        </Link>
        <Link href="/" className="font-breathing text-background text-3xl">
          E & L
        </Link>
        <Button className="font-albert font-medium text-background text-96 py-6 px-7" />
      </div>
    </header>
  );
}
