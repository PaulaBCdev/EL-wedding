import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="bg-primary w-full h-36 lg:h-40">
      {/* Mobile & Tablet */}
      <div className="flex lg:hidden justify-center items-center h-full">
        <p className="font-breathing text-background text-3xl">E & L</p>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center h-full mx-24">
        <a href="" className="font-albert text-background text-96 pr-14">
          Cuándo y dónde
        </a>
        <p className="font-breathing text-background text-3xl">E & L</p>
        <Button />
      </div>
    </header>
  );
}
