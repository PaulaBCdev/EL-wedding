import Link from "next/link";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

export default function HeaderAdmin({ showLogout }: { showLogout?: boolean }) {
  const router = useRouter();
  const logout = async () => {
    await fetch("/api/auth", {
      method: "DELETE",
    });
    router.push("/admin");
  };
  return (
    <header className="bg-primary w-full h-32 lg:h-40">
      {/* Mobile & Tablet */}
      <div className="flex lg:hidden justify-center items-center h-full">
        <Link
          href="/"
          target="_blank"
          className="font-breathing text-background text-3xl"
        >
          E & L
        </Link>
        <button className="text-background z-50" onClick={logout}>
          Cerrar sesión
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-center h-full mx-24">
        <Link href="/" className="font-breathing text-background text-4xl">
          E & L
        </Link>
        <button className="text-background z-50" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
