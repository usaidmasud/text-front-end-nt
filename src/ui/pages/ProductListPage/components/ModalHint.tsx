import * as HoverCard from "@radix-ui/react-hover-card";

function ModalHint() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <button
          title="Looking For Variant?"
          className="text-[#C9CACB] hover:text-primary-main duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </button>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="z-[9999]" sideOffset={5}>
          <div className="p-5 rounded-lg bg-button-gradient w-[220px] ">
            <h5 className="text-[#F6F6F6] font-inter text-base font-bold leading-[143%] tracking-[0.04px] mb-4">
              Looking for variant ?
            </h5>
            <p className="text-[#F6F6F6] font-inter text-sm font-medium leading-[133%] tracking-[0.056px]">
              Don`t worry!!
              <br />
              <br />
              size, sugar level, ice level will be unlocked if you already
              approved by admin.
            </p>
          </div>
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export default ModalHint;
