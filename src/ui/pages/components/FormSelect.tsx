import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface FormSelectProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  prefix?: string;
}

function FormSelect({ label, placeholder, type, prefix }: FormSelectProps) {
  return (
    <div className="block w-full">
      <label
        htmlFor=""
        className="font-poppins font-medium text-sm block leading-[133%] tracking-[0.056px] text-[#C9CACB] mb-1"
      >
        {label}
      </label>
      <select
        className={clsx(
          "px-3 py-[10px] text-sm font-normal bg-[#1A1A1A]  font-inter focus:outline-none focus:ring-2 border-none focus:ring-primary-main rounded-md hover:ring-1 hover:ring-primary-main duration-300 focus:shadow-lg block w-full text-[#898E9A]"
        )}
        placeholder={placeholder ?? label}
      >
        <option value="">Select</option>
        <option value="Coctail">Coctail</option>
        <option value="Shooters">Shooters</option>
        <option value="Premium Spirits">Premium Spirits</option>
        <option value="Non-Alcoholic Beverages">Non-Alcoholic Beverages</option>
      </select>
    </div>
  );
}

export default FormSelect;
