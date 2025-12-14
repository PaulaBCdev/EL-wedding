import Link from "next/link";
import Button from "./ui/Button";

export default function HeaderForm() {
  return (
    <header className="bg-primary w-full h-32 lg:h-40">
      {/* Mobile & Tablet */}
      <div className="flex lg:hidden justify-center items-center h-full">
        <Link href="/" className="font-breathing text-background text-3xl">
          E & L
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-center h-full mx-24">
        <Link href="/" className="font-breathing text-background text-4xl">
          E & L
        </Link>
      </div>
    </header>
  );
}
