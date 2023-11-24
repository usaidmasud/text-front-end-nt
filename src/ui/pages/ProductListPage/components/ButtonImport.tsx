/* eslint-disable @next/next/no-img-element */

interface ButtonImportProps {}

function ButtonImport({}: ButtonImportProps) {
  return (
    <button className=" text-sm px-3 py-[10px] inline-flex gap-2 items-center border font-normal leading-5 rounded-[4px] border-white text-white w-full md:w-[140px] justify-center hover:border-primary-main duration-300 focus:ring-2 focus:ring-primary-main group focus:outline-none focus:border-primary-main">
      <img src="/assets/icons/upload.svg" alt="/assets/icons/upload.svg" className="" />
      Import
    </button>
  );
}

export default ButtonImport;
