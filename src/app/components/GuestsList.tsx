"use client";

import { useState } from "react";
import { GuestResponse } from "../api/dto/guest.dto";
import * as XLSX from "xlsx";

interface GuestsListProps {
  guests: GuestResponse[];
}

export default function GuestsList({ guests }: GuestsListProps) {
  const [guestsList, setGuestsList] = useState(guests);

  const handleDownloadExcel = () => {
    const dataForExcel = guests.map((guest) => ({
      Nombre: guest.name,
      Apellidos: guest.surname,
      Contacto: guest.contact,
      Asiste: guest.attending ? "Sí" : "No",
      Niños: guest.children,
      Alergias: guest.allergies ?? "",
      Comentarios: guest.notes ?? "",
    }));

    // Create excel sheet
    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);

    // Create the book (the whole file)
    const workbook = XLSX.utils.book_new();

    // Adding the excel sheet into the book
    XLSX.utils.book_append_sheet(workbook, worksheet, "Invitados");

    // Download the file
    XLSX.writeFile(workbook, "lista-invitados-confirm.xlsx");
  };

  const handleDeleteGuest = async (guestId: string) => {
    try {
      console.log("Intentando borrar invitado con ID:", guestId);

      const response = await fetch(`/api/guests/${guestId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error("Error borrando invitado");
      }

      // Udpate list
      setGuestsList((prev) =>
        prev.filter((guest) => String(guest.id) !== guestId)
      );

      console.log("Invitado borrado exitosamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col w-full max-w-xl md:max-w-4xl lg:max-w-[1330px] px-16 gap-10">
      <div className="flex justify-end">
        <button
          onClick={handleDownloadExcel}
          type="button"
          className="bg-secondary rounded-md hover:bg-background hover:text-secondary cursor-pointer font-albert font-medium text-background text-sm lg:text-lg py-3 px-6"
        >
          Descargar
        </button>
      </div>
      <div>
        {guests.length === 0 ? (
          <p className="font-catchy text-secondary text-xl text-center">
            Todavía no tenéis invitados confirmados
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="font-albert font-medium lg:text-xl">
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Contacto</th>
                  <th>Asiste</th>
                  <th>Niños</th>
                  <th>Alergias</th>
                  <th>Comentarios</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {guestsList.map((guest) => (
                  <tr key={guest.id}>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.name}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.surname}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.contact}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.attending ? "Sí" : "No"}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.children}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.allergies?.length === 0 ? "-" : guest.allergies}
                    </td>
                    <td className="font-albert font-medium text-primary lg:text-lg">
                      {guest.notes?.length === 0 ? "-" : guest.notes}
                    </td>
                    <td className="flex fle-col justify-center gap-5">
                      <button
                        className="btn btn-circle btn-text btn-sm cursor-pointer"
                        aria-label="Action button"
                        onClick={() => handleDeleteGuest(String(guest.id))}
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
    </div>
  );
}
