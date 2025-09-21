import React from "react";

type RadioButtonType = {
  id: string;
  name: string;
  value: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RadioButton: React.FC<RadioButtonType> = ({
  id,
  name,
  value,
  label,
  ...args
}) => {
  return (
    <div className="flex items-start mb-2">
      <input
        className="mt-1"
        type="radio"
        id={id}
        name={name}
        value={value}
        {...args}
      />
      <label className="text-heading ml-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
