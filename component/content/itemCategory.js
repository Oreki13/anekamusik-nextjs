import React from "react";
import Link from "next/link";

const Item = ({ name, img, page }) => {
  return (
    <Link href={"/" + page}>
      <div className="bg-yellow-300  rounded-2xl max-h-60 max-w-sm p-3  hover:bg-yellow-400 cursor-pointer transition-all duration-200 shadow-md ">
        <div className="grid grid-cols-2 no-gutters">
          <div className="flex  justify-center items-center">
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>
          <div className="w-full max-h-40 relative">
            <img src={img} className="w-full max-h-40 object-contain" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
