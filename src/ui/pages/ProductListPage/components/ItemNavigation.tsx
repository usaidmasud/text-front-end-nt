import clsx from "clsx";

interface ItemNavigationProps {
  label: string;
  active?: boolean;
}

function ItemNavigation({ label, active }: ItemNavigationProps) {
  return (
    <div
      className={clsx(
        " py-3 text-center cursor-pointer",
        active && "border-t-2 border-t-[#EF9533] "
      )}
    >
      <span
        className={clsx(
          "text-xs md:text-sm font-medium leading-[133%] tracking-[0.056px] hover:text-[#ef9533] duration-300",
          active && "text-[#EF9533]",
          !active && "text-[#9F9E9F]"
        )}
      >
        {label}
      </span>
    </div>
  );
}

export default ItemNavigation;
