import React from "react";

interface IProps {
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  type?: HTMLInputElement["type"];
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ placeholder, label, error, type, name, required, onChange }, ref) => (
    <div className="flex flex-col gap-1 text-start">
      {label && (
        <label
          htmlFor={name}
          className="text-discord-white font-ggSansSemibold text-md opacity-80"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="p-2 bg-discord-black rounded outline-none focus:outline-discord-blue text-discord-white drop-shadow opacity-80 font-ggSansRegular"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
);
