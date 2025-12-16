import { GuestResponse } from "../../api/dto/guest.dto";
import GuestsList from "../../components/GuestsList";
import HeaderForm from "../../components/HeaderForm";

interface GuestsApiResponse {
  data: GuestResponse[];
}

export default async function GuestsListPage() {
  const response = await fetch(process.env.API_URL + "/api/guests");
  const guests: GuestsApiResponse = await response.json();

  return (
    <>
      <HeaderForm />
      <div className="flex flex-col justify-center items-center w-full bg-background my-24 lg:my-48 gap-20 lg:gap-32">
        <h1 className="font-breathing text-secondary text-center text-4xl lg:text-6xl leading-16 px-28">
          Vuestra lista de invitados
        </h1>
        <GuestsList guests={guests.data} />
      </div>
    </>
  );
}
