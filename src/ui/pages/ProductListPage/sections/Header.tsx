/* eslint-disable @next/next/no-img-element */
import React from "react";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <div className="pt-8 mx-[201px] flex justify-between">
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
        <h5 className="text-2xl text-white font-medium leading-8">Product List</h5>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;
