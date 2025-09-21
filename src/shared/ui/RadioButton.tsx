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
    <div>
      <input type="radio" id={id} name={name} value={value} {...args} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
