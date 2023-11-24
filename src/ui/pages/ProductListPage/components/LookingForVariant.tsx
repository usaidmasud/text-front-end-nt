interface LookingForVariantProps {}

function LookingForVariant({}: LookingForVariantProps) {
  return (
    <div className="hidden lg:block absolute top-0 -right-[16rem] w-[220px]">
      <div className="p-5 rounded-lg bg-button-gradient ">
        <h5 className="text-[#F6F6F6] font-inter text-base font-bold leading-[143%] tracking-[0.04px] mb-4">
          Looking for variant ?
        </h5>
        <p className="text-[#F6F6F6] font-inter text-sm font-medium leading-[133%] tracking-[0.056px]">
          Don`t worry!!
          <br />
          <br />
          size, sugar level, ice level will be unlocked if you already approved
          by admin.
        </p>
      </div>
    </div>
  );
}

export default LookingForVariant;
