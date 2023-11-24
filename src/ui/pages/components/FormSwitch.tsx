import { HTMLInputTypeAttribute } from "react";

import * as Switch from "@radix-ui/react-switch";

interface FormSwitchProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  prefix?: string;
}

function FormSwitch({ label, placeholder, type, prefix }: FormSwitchProps) {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="block w-full">
        <label
          htmlFor=""
          className="font-poppins font-medium text-sm block leading-[133%] tracking-[0.056px] text-[#C9CACB] mb-1"
        >
          {label}
        </label>
      </div>
      <Switch.Root className="relative h-6 w-12 rounded-full bg-[#1A1A1A] shadow-lg focus:shadow-sm data-[state=checked]:bg-primary-main">
        <Switch.Thumb className=" block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform duration-300 will-change-transform data-[state=checked]:translate-x-6" />
      </Switch.Root>
    </div>
  );
}

export default FormSwitch;
