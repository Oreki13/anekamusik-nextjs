import React from "react";

export default function CardOrderSummary({ totalQty, totalPrice }) {
  return (
    <div className="border-2 md:ml-8 flex justify-between md:block  border-gray-50 shadow-lg rounded-md p-3 md:h-full  md:sticky fixed bg-white md:top-24 bottom-0 w-full md:w-1/3">
      <h1 className="text-md hidden md:block">Ringkasan Pesanan</h1>
      <div className="md:mt-3 text-sm border-b-2 border-gray-50 md:pb-3">
        <div className="flex flex-col justify-between text-gray-600">
          <p>Total Harga ({totalQty} Barang)</p>
          <p>Rp {totalPrice.toLocaleString("id-ID")}</p>
        </div>
        {/* <div className="flex justify-between text-gray-600">
          <p>Total Harga</p>
          <p>Rp 20.000.000</p>
        </div> */}
      </div>
      <button className="bg-yellow-300 md:w-full py-1 px-8 md:mt-3 rounded-md hover:bg-yellow-400 transition-all duration-200">
        Beli ({totalQty})
      </button>
    </div>
  );
}
