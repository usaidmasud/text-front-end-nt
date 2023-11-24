/* eslint-disable @next/next/no-img-element */
interface AddProductProps {}

function AddProduct({}: AddProductProps) {
  return (
    // h-[206px] w-[228px]
    <div className="w-full max-w-[228px] p-4 flex flex-col  justify-center items-center gap-3 border-2 border-dashed rounded-xl bg-[#1E1E1E] border-[#313131]">
      <img src="/assets/icons/plus.svg" alt="/assets/icons/plus.svg" />
      <span className="text-white text-base not-italic font-medium leading-[143%] tracking-[0.04px];">
        Add Product
      </span>
    </div>
  );
}

export default AddProduct;
