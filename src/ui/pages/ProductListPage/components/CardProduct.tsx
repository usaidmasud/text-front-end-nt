import { thousandFormat } from "@/utils/libs/currency";
import Image from "next/image";

interface CardProductProps {
  imageUrl: string;
  name: string;
  description: string;
  count: number;
  price: number;
}

function CardProduct({
  imageUrl,
  name,
  count,
  description,
  price,
}: CardProductProps) {
  return (
    //
    <div className="bg-[#1B1B1B] p-4 rounded-xl w-full  2xl:max-w-[228px] ">
      <span className="text-white text-base font-medium leading-[143%] tracking-[0.04px]">
        {thousandFormat(price.toString())} NT
      </span>
      <div className="relative h-[125px] lg:h-[250px] xl:h-[250px] 2xl:h-[153px] w-auto mt-3">
        <Image
          fill
          className="rounded-lg object-cover"
          src={imageUrl}
          alt={imageUrl ?? name}
        />
      </div>
      <h5 className="text-base font-bold leading-[143%] tracking-[0.04px] product-name mt-3">
        {name}
      </h5>
      <p className="mt-3 text-[#9F9E9F] text-sm font-normal leading-[133%] tracking-[0.056px]">
        {description}
      </p>
      <p className="mt-3 text-sm font-bold leading-[133%] tracking-[0.056px] text-white">
        {count}pcs
      </p>
    </div>
  );
}

export default CardProduct;
