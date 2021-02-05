import React from "react";

const ItemLoading = () => {
  return (
    <div className="bg-gray-300 animate-pulse rounded-2xl max-h-60 max-w-sm p-6 overflow-hidden transition-all duration-200 shadow-md ">
      <div className="grid grid-cols-2  ">
        <div className="flex  justify-center items-center">
          <div className="w-20 h-5 bg-gray-400 rounded-md"></div>
        </div>
        <div className="w-full max-h-40 ">
          <div className="w-32 h-32 rounded-md bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemLoading;
