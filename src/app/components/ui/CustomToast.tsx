"use client";

import Image from "next/image";
import { toast as sonnerToast } from "sonner";

interface CustomToastProps {
  id: string | number;
  message: string;
  type: "success" | "error";
}

export const CustomToast = ({ id, message, type }: CustomToastProps) => {
  return (
    <div
      className={`flex font-albert rounded-lg shadow-lg w-full md:max-w-[364px] items-center p-5 my-2 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="shrink-0">
          {type === "success" ? (
            <Image
              src="/circle-check.png"
              alt="success"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/alert-triangle.png"
              alt="error"
              width={24}
              height={24}
            />
          )}
        </div>
        <p className={`font-albert text-sm font-normal text-white`}>
          {message}
        </p>
      </div>
      <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        <button
          className="shrink-0"
          onClick={() => {
            sonnerToast.dismiss(id);
          }}
        ></button>
      </div>
    </div>
  );
};
