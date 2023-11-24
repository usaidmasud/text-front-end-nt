/* eslint-disable @next/next/no-img-element */

import AddProduct from "../components/AddProduct";
import CardProduct from "../components/CardProduct";
import Tag from "../components/Tag";

interface SetupFormProps {}

const categories = [
  "Coctail",
  "Shooters",
  "Premium Spirits",
  "Non Alcoholic Beverages",
];
function SetupForm({}: SetupFormProps) {
  return (
    <div className="px-[246px] mt-20">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <input
            className="px-3 py-[10px] block w-full text-sm font-normal leading-5 relative pr-10 rounded-[4px] bg-[#171717] text-white focus:outline-none border border-[color:var(--black-70,#333)] border-solid"
            placeholder="Search Product"
          />
          <img
            src="/assets/icons/search.svg"
            alt="/assets/icons/search.svg"
            className="absolute inset-y-3  right-3"
          />
        </div>
        <button className="text-sm px-3 py-[10px] inline-flex gap-2 items-center border font-normal leading-5 rounded-[4px] border-white text-white w-[140px] justify-center">
          <img src="/assets/icons/upload.svg" alt="/assets/icons/upload.svg" />
          Import
        </button>
      </div>
      <div className="bg-[#1E1E1E] text-white px-8 py-4 w-full mt-8 rounded-xl gap-3 flex items-center">
        <h5 className="text-[color:var(--white-100,#FFF)] text-center text-sm not-italic font-medium leading-[133%] tracking-[0.056px];">
          Category
        </h5>
        {categories.map((category, index) => (
          <Tag title={category} key={index} />
        ))}
        <img
          src="/assets/icons/pencil.svg"
          alt="/assets/icons/pencil.svg"
          className=""
        />
      </div>

      <div className="mt-6 grid grid-cols-4 gap-11">
        <CardProduct
          imageUrl="/assets/products/product-example.png"
          count={6}
          price={15000}
          name="Pack of Beer (6pcs of heineken)"
          description="Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol."
        />
        <AddProduct />
      </div>
    </div>
  );
}

export default SetupForm;