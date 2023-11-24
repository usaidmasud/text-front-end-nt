import ItemNavigation from "../components/ItemNavigation";

interface BottomNavigationProps {}

function BottomNavigation({}: BottomNavigationProps) {
  return (
    <div className="mt-36 md:mt-28">

    <div className="fixed bottom-0 w-full bg-[#1E1E1E]">
      <div className="grid grid-cols-3 md:grid-cols-6">
        <ItemNavigation active label="Nightclub Profile" />
        <ItemNavigation active label="Featured" />
        <ItemNavigation active label="Beverages" />
        <ItemNavigation label="Table Information" />
        <ItemNavigation label="Operational Hour" />
        <button className="py-3 bg-primary-main text-white font-medium text-sm leading-[133%] tracking-[0.056px]">
          NEXT
        </button>
      </div>
    </div>
    </div>
  );
}

export default BottomNavigation;
