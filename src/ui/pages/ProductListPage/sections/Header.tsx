/* eslint-disable @next/next/no-img-element */

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div className="pt-8 mx-10 md:px-[calc(201px-140px)] lg:px-[calc(201px-180px)] xl:px-[calc(201px-190px)] 2xl:px-[calc(201px)] flex md:flex-row flex-col items-center justify-between ">
      <div className="inline-flex items-center gap-[10px]">
        <img src="/assets/icons/arrow-left-icon.svg" alt="arrow-left-icon" />
        <span className="font-semibold text-lg text-white leading-8">Back</span>
      </div>
      <div className="inline-flex items-center gap-[10px]">
        <img
          src="/assets/icons/product-icon.svg"
          alt="/assets/icons/product-icon.svg"
          className=""
        />
        <h5 className="text-2xl text-white font-medium leading-8">
          Product List
        </h5>
      </div>
      <div className="hidden lg:block"></div>
    </div>
  );
}

export default Header;
