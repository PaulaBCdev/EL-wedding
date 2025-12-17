"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderAdmin from "../components/HeaderAdmin";
import { PasswordDTO } from "../api/dto/auth.dto";

export default function AdminAccess() {
  const [passwordImput, setPasswordImput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isDisabled = !passwordImput;

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordImput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const passwordData: PasswordDTO = {
        psw: passwordImput,
      };

      const res = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(passwordData),
      });
      const data = await res.json();

      if (!data.status) {
        setError("Contraseña incorrecta");
        return;
      }

      router.push("/admin/list");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeaderAdmin />
      <div className="relative overflow-hidden flex items-center justify-center bg-background ">
        <div className="max-w-md w-full px-6 my-44 z-10">
          <h1 className="font-catchy text-4xl text-secondary text-center mb-8">
            Acceso exclusivo de los novios
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-full">
              <label
                htmlFor="password"
                className="block font-albert font-medium text-primary mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={passwordImput}
                onChange={handlePasswordChange}
                placeholder="Introduce la contraseña"
                className="w-full px-4 py-3 rounded-md border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>

            {error && (
              <p className="text-red-500 font-albert text-sm absolute">
                {error}
              </p>
            )}

            <button
              disabled={isDisabled}
              type="submit"
              className={`bg-secondary rounded-md font-catchy text-background text-xl lg:text-2xl pb-4 pt-6 px-6 mt-28 mx-[100px] md:mx-[150px] ${
                isDisabled ? "cursor-not-allowed, opacity-50" : "cursor-pointer"
              }`}
            >
              {isLoading ? "Accediendo..." : "Acceder"}
            </button>
          </form>
        </div>

        <div className="flex lg:hidden">
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-40 z-0 w-[370px] -rotate-160 -top-[360px] -right-52"
          />
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-40 z-0 w-[370px] rotate-10 -bottom-75 -left-30"
          />
        </div>

        <div className="hidden lg:flex">
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-40 z-0 w-[500px] -rotate-40 scale-x-[-1] -top-10 -right-30"
          />
          <Image
            src="/flor.svg"
            alt="flor"
            width={908}
            height={1280}
            className="absolute opacity-40 z-0 w-[500px] rotate-40 -left-30 -top-10"
          />
        </div>
      </div>
    </>
  );
}
