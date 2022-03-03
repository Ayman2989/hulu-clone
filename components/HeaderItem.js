import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center w-12 cursor-pointer sm:w-20 hover:text-white hover:animate-bounce">
      <Icon className="h-8 mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
