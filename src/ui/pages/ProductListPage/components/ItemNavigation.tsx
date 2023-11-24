import clsx from "clsx";

interface ItemNavigationProps {
  label: string;
  active?: boolean;
}

function ItemNavigation({ label, active }: ItemNavigationProps) {
  return (
    <div
      className={clsx(
        " py-3 text-center",
        active && "border-t-2 border-t-[#EF9533] "
      )}
    >
      <span
        className={clsx(
          " text-sm font-medium leading-[133%] tracking-[0.056px]",
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
