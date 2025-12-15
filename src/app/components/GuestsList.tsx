"use client";

import { GuestResponse } from "../api/dto/guest.dto";

interface GuestsListProps {
  guests: GuestResponse[];
}

export default function GuestsList({ guests }: GuestsListProps) {
  console.log(guests);
  return (
    <div className="w-full max-w-xl md:max-w-4xl lg:max-w-7xl px-16">
      {guests.length === 0 ? (
        <p className="font-catchy text-secondary text-xl">
          Todavía no tenéis invitados confirmados
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="font-albert font-medium text-md">
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Contacto</th>
                <th>Asiste</th>
                <th>Niños</th>
                <th>Alergias</th>
                <th>Comentarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id}>
                  <td className="font-albert font-medium text-primary">
                    {guest.name}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.surname}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.contact}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.attending === true ? "Sí" : "No"}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.children}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.allergies?.length === 0 ? "-" : guest.allergies}
                  </td>
                  <td className="font-albert font-medium text-primary">
                    {guest.notes?.length === 0 ? "-" : guest.notes}
                  </td>
                  <td className="flex fle-col justify-center gap-5">
                    <button
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--pencil] size-5"></span>
                    </button>
                    <button
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--trash] size-5"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
