import { HTMLInputTypeAttribute } from "react";

interface FieldProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  required?: boolean;
}

export const Field = ({
  label,
  type = "text",
  name,
  required = false,
}: FieldProps) => {
  return (
    <div className="flex flex-col min-w-[300]">
      <label htmlFor={name}>{label}</label>
      <input
        className="mt-2 border-1 rounded-xl h-10 px-2"
        type={type}
        name={name}
        id={name}
        required={required}
      />
    </div>
  );
};
