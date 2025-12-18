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
      <div className="flex justify-center items-center h-full p-10">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-center">
          <Link
            href="/"
            target="_blank"
            className="font-breathing text-background text-3xl"
          >
            E & L
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <button
            className="bg-secondary rounded-md hover:bg-background hover:text-secondary cursor-pointer font-albert font-medium text-background text-96 py-3 px-5"
            onClick={logout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}
