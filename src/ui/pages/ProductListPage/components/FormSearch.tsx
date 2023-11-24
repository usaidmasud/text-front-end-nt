/* eslint-disable @next/next/no-img-element */

interface FormSearchProps {}

function FormSearch({}: FormSearchProps) {
  return (
    <div className="relative w-full md:w-64">
      <input
        type="search"
        className="px-3 py-[10px] w-full text-sm font-normal leading-5 focus:outline-none pr-10 rounded-[4px] bg-[#171717] text-[#FCFCFD]  border border-[#333] hover:ring-1 hover:ring-primary-main focus:ring-2 focus:ring-primary-main focus:border-none duration-300"
        placeholder="Search Product"
      />
      <img
        src="/assets/icons/search.svg"
        alt="/assets/icons/search.svg"
        className="absolute inset-y-3 right-3"
      />
    </div>
  );
}

export default FormSearch;
