/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface FormUploadProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  prefix?: string;
}

function FormUpload({ label, placeholder, type, prefix }: FormUploadProps) {
  return (
    <div className="block w-full relative">
      <label
        htmlFor=""
        className="font-poppins font-medium text-sm block leading-[133%] tracking-[0.056px] text-[#C9CACB] mb-1"
      >
        {label}
      </label>
      <input type="file" name="" hidden id="upload-file" />
      <label
        htmlFor="upload-file"
        className={clsx(
          "px-3 py-[10px] text-sm font-normal bg-[#1A1A1A]  font-inter focus:outline-none focus:ring-2 border-none focus:ring-primary-main rounded-md hover:ring-1 hover:ring-primary-main duration-300 focus:shadow-lg block w-full text-[#898E9A]"
        )}
      >
        Select File
      </label>
      <img
        className="absolute inset-y-[34px] right-3"
        src="/assets/icons/upload.svg"
        alt=""
      />
    </div>
  );
}

export default FormUpload;
