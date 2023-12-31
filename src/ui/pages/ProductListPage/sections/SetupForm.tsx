/* eslint-disable @next/next/no-img-element */

import AddProduct from "../components/AddProduct";
import ButtonImport from "../components/ButtonImport";
import CardProduct from "../components/CardProduct";
import FormSearch from "../components/FormSearch";
import Tag from "../components/Tag";
import ModalForm from "./ModalForm";

interface SetupFormProps {}

const categories = [
  "Coctail",
  "Shooters",
  "Premium Spirits",
  "Non Alcoholic Beverages",
];
function SetupForm({}: SetupFormProps) {
  return (
    <div className="px-10 md:px-[calc(247px-140px)] lg:px-[calc(247px-160px)] xl:px-[calc(247px-160px)] 2xl:px-[247px]  mt-10 md:mt-20">
      <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row md:justify-between items-center">
        <FormSearch />
        <ButtonImport />
      </div>
      <div className="bg-[#1E1E1E] text-white px-8 py-4 w-full mt-8 rounded-xl gap-3 flex flex-wrap items-center">
        <h5 className="text-[color:var(--white-100,#FFF)] text-center text-sm not-italic  font-medium leading-[133%] tracking-[0.056px];">
          Category
        </h5>
        {categories.map((category, index) => (
          <Tag title={category} key={index} />
        ))}
        <img
          src="/assets/icons/pencil.svg"
          alt="/assets/icons/pencil.svg"
          className="cursor-pointer"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-11 ">
        <CardProduct
          imageUrl="/assets/products/product-example.png"
          count={6}
          price={15000}
          name="Pack of Beer (6pcs of heineken)"
          description="Heineken lager beer, or known as just Heineken, is one of the pale beers with 5% alcohol."
        />
        <AddProduct />
      </div>
      <ModalForm />
    </div>
  );
}

export default SetupForm;
