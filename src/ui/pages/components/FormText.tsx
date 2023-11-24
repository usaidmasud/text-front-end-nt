interface FormTextProps {
  label: string;
  placeholder?: string;
  required?:boolean
}

function FormText({ label, placeholder, required }: FormTextProps) {
  return (
    <div className="block w-full">
      <label
        htmlFor=""
        className="font-poppins font-medium text-sm block leading-[133%] tracking-[0.056px] text-[#C9CACB] mb-1"
      >
        {label}
        {required && (
          <span className="font-inter text-sm text-[#F47566]">*</span>
        )}
      </label>
      <textarea
        cols={30}
        rows={3}
        className="px-3 py-[10px] text-sm font-normal bg-[#1A1A1A]  text-white font-inter focus:outline-none focus:ring-2 border-none focus:ring-primary-main rounded-md hover:ring-1 hover:ring-primary-main duration-300 focus:shadow-lg block w-full"
        placeholder={placeholder ?? label}
      ></textarea>
    </div>
  );
}

export default FormText;
