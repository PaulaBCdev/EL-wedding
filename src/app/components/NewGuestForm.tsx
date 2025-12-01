"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NewGuestDTO } from "../api/dto/new-guest.dto";

export default function NewGuestForm() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [surnameInput, setSurnameInput] = useState<string>("");
  const [contactInput, setContactInput] = useState<number | "">("");
  const [attendingDropdown, setAttendingDropdown] = useState<boolean | null>(
    null
  );
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [childrenInput, setChildrenInput] = useState<number>(0);
  const [allergiesInput, setAllergiesInput] = useState<string>("");
  const [notesInput, setNotesInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dropdownOptions = [
    { label: "Sí", value: true },
    { label: "No", value: false },
  ];

  const isDisabled =
    !nameInput ||
    !surnameInput ||
    !contactInput ||
    attendingDropdown === null ||
    isLoading;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurnameInput(e.target.value);
  };

  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactInput(Number(e.target.value));
  };

  const toogleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const handleSelect = (option: boolean) => {
    setAttendingDropdown(option);
    setDropdownIsOpen(false);
  };

  const handleChildrenChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChildrenInput(Number(e.target.value));
  };

  const handleAllergiesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAllergiesInput(e.target.value);
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotesInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const guestData: NewGuestDTO = {
        name: nameInput,
        surname: surnameInput,
        contact: contactInput,
        attending: attendingDropdown,
        children: childrenInput,
        allergies: allergiesInput,
        notes: notesInput,
      };

      const res = await fetch("/api/guests", {
        method: "POST",
        body: JSON.stringify(guestData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      await res.json();
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error ? error.message : "Error al enviar el formulario"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-xl md:max-w-2xl lg:max-w-5xl px-16 gap-6"
    >
      {/* name input */}
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="font-catchy text-secondary text-2xl lg:text-4xl"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          minLength={3}
          maxLength={20}
          onChange={handleNameChange}
          className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl h-10 lg:h-14 px-3"
        />
      </div>

      {/* surname input */}
      <div className="flex flex-col">
        <label
          htmlFor="surname"
          className="font-catchy text-secondary text-2xl lg:text-4xl"
        >
          Apellidos
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
          required
          minLength={3}
          maxLength={50}
          onChange={handleSurnameChange}
          className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl h-10 lg:h-14 px-3"
        />
      </div>

      {/* contact input */}
      <div className="flex flex-col">
        <label
          htmlFor="contact"
          className="font-catchy text-secondary text-2xl lg:text-4xl"
        >
          Teléfono de contacto
        </label>
        <input
          type="number"
          name="contact"
          id="contact"
          required
          minLength={3}
          maxLength={50}
          onChange={handleContactChange}
          className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl h-10 lg:h-14 px-3"
        />
      </div>

      {/* attending & children inputs */}
      <div className="flex flex-col justify-between md:flex-row gap-6">
        {/* attending dropdown */}
        <div className="flex flex-col w-full">
          <label
            htmlFor="attending"
            className="font-catchy text-secondary text-2xl lg:text-4xl"
          >
            ¿Asistirás?
          </label>
          <button
            type="button"
            onClick={toogleDropdown}
            className="flex justify-between items-center font-albert text-secondary lg:text-2xl text-lg bg-primary/30 border-2 border-secondary rounded-sm h-10 lg:h-14 px-3"
          >
            {attendingDropdown === null
              ? "Selecciona"
              : attendingDropdown
              ? "Sí"
              : "No"}

            {dropdownIsOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdownIsOpen && (
            <div className=" flex flex-col gap-1 my-2 right-0 top-20">
              {dropdownOptions.map((option, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setAttendingDropdown(option.value);
                    setDropdownIsOpen(false);
                  }}
                  className="flex font-albert text-background text-xl justify-center items-center bg-primary rounded-2xl h-7 px-16 py-6"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* children input */}
        <div className="flex flex-col w-full">
          <label
            htmlFor="children"
            className="font-catchy text-secondary text-2xl lg:text-4xl"
          >
            ¿Te acompañarán niños?
          </label>
          <input
            type="number"
            name="children"
            id="children"
            placeholder="0"
            onChange={handleChildrenChange}
            className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl h-10 lg:h-14 px-3"
          />
        </div>
      </div>

      {/* allergies input */}
      <div className="flex flex-col">
        <label
          htmlFor="allergies"
          className="font-catchy text-secondary text-2xl lg:text-4xl"
        >
          ¿Alguna restricción alimentaria?
        </label>
        <textarea
          name="allergies"
          id="allergies"
          rows={4}
          placeholder="Dieta vegana, alergia al gluten..."
          onChange={handleAllergiesChange}
          className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl p-3"
        ></textarea>
      </div>

      {/* notes input */}
      <div className="flex flex-col">
        <label
          htmlFor="notes"
          className="font-catchy text-secondary text-2xl lg:text-4xl"
        >
          ¿Tienes alguna pregunta o comentario?
        </label>
        <textarea
          name="notes"
          id="notes"
          rows={4}
          onChange={handleNotesChange}
          className="bg-primary/30 border-secondary border-2 rounded-sm font-albert text-secondary font-normal lg:text-2xl p-3"
        ></textarea>
      </div>

      {/* submit button */}
      <button
        disabled={isDisabled}
        type="submit"
        className="bg-secondary rounded-md font-catchy text-background text-3xl lg:text-4xl pb-4 pt-6 mt-28 mx-[100px] md:mx-[150px] lg:mx-0 lg:ml-[700px]"
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
