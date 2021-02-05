import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Detail({ data, qty }) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
      <div className=" bg-yellow-300 max-w-sm max-h-56  mx-auto sm:rounded-lg rounded-sm p-5">
        <img src={data.img} className="object-contain w-full max-h-44" />
      </div>
      <div className=" ml-0 sm:ml-5 px-3 md:col-span-2">
        <div className="flex items-center justify-center sm:justify-between flex-wrap">
          <div className="w-full text-center sm:w-auto">
            <h1 className="text-2xl ">{data.name}</h1>
          </div>
          <div className="flex flex-wrap ">
            <button
              onClick={() => {
                router.push("/wishlist");
              }}
              className="bg-red-500 w-full justify-center sm:w-auto mt-2 sm:mt-0 transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring ring-red-500 ring-offset-2 ring-opacity-25  group mr-0 sm:mr-5 px-10 flex items-center py-1.5 rounded-md"
            >
              <FontAwesomeIcon
                className="w-4 h-4 mr-2 text-gray-50 group-hover:animate-pulse "
                icon={faHeart}
              />
              <p className="text-white">Add Whislist</p>
            </button>
            <button
              onClick={() => {
                router.push("/cart");
              }}
              className="bg-yellow-500 transition-all  w-full justify-center sm:w-auto mt-2 sm:mt-0 duration-300 hover:bg-yellow-600 focus:outline-none focus:ring ring-yellow-700 ring-offset-2 ring-opacity-25 flex items-center px-10 py-1.5 rounded-md"
            >
              <FontAwesomeIcon
                className="w-4 h-4 mr-2 text-gray-50"
                icon={faShoppingCart}
              />
              <p className="text-white">Buy</p>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-justify">{data.deskripsi}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 sm:gap-y-5 mt-5">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">Avelible In</h2>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-100 p-2 rounded-md border-2 border-gray-300">
              {data.branch.map((val, index) => (
                <p key={index}>{val.name}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">Quantity</h2>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-100 p-2 rounded-md border-2 border-gray-300">
              <p>{qty}</p>
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">Price</h2>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-100 p-2 rounded-md border-2 border-gray-300">
              <p>Rp {data.price.toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
