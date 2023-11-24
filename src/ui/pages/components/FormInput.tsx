import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  prefix?: string;
}

function FormInput({
  label,
  placeholder,
  type,
  prefix,
  required,
}: FormInputProps) {
  return (
    <div className="block w-full relative">
      <label
        htmlFor=""
        className="font-poppins font-medium text-sm block leading-[133%] tracking-[0.056px] text-[#C9CACB] mb-1"
      >
        {label}
        {required && (
          <span className="font-inter text-sm text-[#F47566]">*</span>
        )}
      </label>
      <input
        type={type ?? "text"}
        className={clsx(
          "px-3 py-[10px] text-sm font-normal bg-[#1A1A1A]  font-inter focus:outline-none focus:ring-2 border-none focus:ring-primary-main rounded-md hover:ring-1 hover:ring-primary-main duration-300 focus:shadow-lg block w-full text-[#898E9A]",
          prefix && "pl-11"
        )}
        placeholder={placeholder ?? label}
      />
      {prefix && (
        <span className="text-[#FCFCFD] font-poppins text-sm font-semibold leading-[133%] tracking-[0.056px] absolute inset-y-[34px] left-3">
          {prefix}
        </span>
      )}
    </div>
  );
}

export default FormInput;
