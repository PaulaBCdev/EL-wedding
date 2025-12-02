import Link from "next/link";

const Button = () => {
  return (
    <Link href="/form">
      <button
        type="button"
        className="bg-secondary rounded-md font-albert text-background text-96 py-6 px-7 hover:bg-background hover:text-secondary hover:cursor-pointer"
      >
        ConfirmaAsistencia
      </button>
    </Link>
  );
};

export default Button;
