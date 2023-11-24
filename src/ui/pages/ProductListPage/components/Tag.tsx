import React from "react";

interface TagProps {
  title: string;
}

function Tag({ title }: TagProps) {
  return (
    <div className="flex px-4 py-2 justify-center items-center rounded-xl border border-white">
      <span className="text-[color:var(--semantic-text-text-body,#F6F6F6)] text-sm not-italic font-medium leading-[133%] tracking-[0.056px];">
        {title}
      </span>
    </div>
  );
}

export default Tag;
