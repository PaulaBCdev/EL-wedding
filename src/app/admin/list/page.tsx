"use client";

import { useEffect, useState } from "react";
import { GuestResponse } from "../../api/dto/guest.dto";
import GuestsList from "../../components/GuestsList";
import HeaderForm from "../../components/HeaderForm";
import { useRouter } from "next/navigation";
import HeaderAdmin from "../../components/HeaderAdmin";

interface GuestsApiResponse {
  data: GuestResponse[];
}

export default function GuestsListPage() {
  const [guests, setGuests] = useState<GuestResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    //Fetch guests
    const fetchGuests = async () => {
      try {
        const response = await fetch("/api/guests");
        const data: GuestsApiResponse = await response.json();

        setGuests(data.data);
      } catch (error) {
        console.error("Error cargando invitados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, [router]);

  if (loading) {
    return (
      <>
        <HeaderAdmin />
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-albert text-xl">Cargando...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderAdmin />
      <div className="min-h-[500px] flex flex-col justify-center items-center w-full bg-background my-24 lg:my-48 gap-20 lg:gap-32">
        <h1 className="font-breathing text-secondary text-center text-4xl lg:text-6xl leading-16 px-28">
          Vuestra lista de invitados
        </h1>
        <GuestsList guests={guests} />
      </div>
    </>
  );
}
