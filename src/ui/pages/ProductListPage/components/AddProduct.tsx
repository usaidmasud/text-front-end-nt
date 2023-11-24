"use client";
import { handleModal } from "@/utils/redux/slices/product.slice";
import { AppDispatch } from "@/utils/redux/store";
/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
interface AddProductProps {}

function AddProduct({}: AddProductProps) {
  const dispatch: AppDispatch = useDispatch();
  return (
    // h-[206px] w-[228px]
    <div
      onClick={() => dispatch(handleModal(true))}
      // max-w-[228px]
      className="w-full h-[250px] md:h-auto  cursor-pointer p-4 flex flex-col  justify-center items-center gap-3 border-2 border-dashed rounded-xl bg-[#1E1E1E] border-[#313131]"
    >
      <img src="/assets/icons/plus.svg" alt="/assets/icons/plus.svg" />
      <span className="text-white text-base not-italic font-medium leading-[143%] tracking-[0.04px];">
        Add Product
      </span>
    </div>
  );
}

export default AddProduct;
