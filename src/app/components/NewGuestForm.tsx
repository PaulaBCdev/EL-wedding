"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <form onSubmit={handleSubmit}>
      {/* name input */}
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          minLength={3}
          maxLength={20}
          onChange={handleNameChange}
        />
      </div>

      {/* surname input */}
      <div>
        <label htmlFor="surname">Apellidos</label>
        <input
          type="text"
          name="surname"
          id="surname"
          required
          minLength={3}
          maxLength={50}
          onChange={handleSurnameChange}
        />
      </div>

      {/* contact input */}
      <div>
        <label htmlFor="contact">Teléfono de contacto</label>
        <input
          type="number"
          name="contact"
          id="contact"
          required
          minLength={3}
          maxLength={50}
          onChange={handleContactChange}
        />
      </div>

      {/* attending & children inputs */}
      <div>
        {/* attending dropdown */}
        <div>
          <label htmlFor="attending">¿Asistirás?</label>
          <button type="button" onClick={toogleDropdown}>
            {attendingDropdown === null
              ? "Selecciona"
              : attendingDropdown
              ? "Sí"
              : "No"}
            <ChevronDown />
          </button>

          {dropdownIsOpen && (
            <div>
              {dropdownOptions.map((option, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setAttendingDropdown(option.value);
                    setDropdownIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* children input */}
        <div>
          <label htmlFor="children">¿Te acompañarán niños?</label>
          <input
            type="number"
            name="children"
            id="children"
            placeholder="0"
            onChange={handleChildrenChange}
          />
        </div>
      </div>

      {/* allergies input */}
      <div>
        <label htmlFor="allergies">¿Alguna restricción alimentaria?</label>
        <textarea
          name="allergies"
          id="allergies"
          rows={4}
          placeholder="Dieta vegana, alergia al gluten..."
          onChange={handleAllergiesChange}
        ></textarea>
      </div>

      {/* notes input */}
      <div>
        <label htmlFor="notes">¿Tienes alguna pregunta o comentario?</label>
        <textarea
          name="notes"
          id="notes"
          rows={4}
          onChange={handleNotesChange}
        ></textarea>
      </div>

      {/* submit button */}
      <button disabled={isDisabled} type="submit">
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
