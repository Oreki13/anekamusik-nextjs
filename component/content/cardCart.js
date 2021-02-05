import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlusCircle,
  faMinusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function CardCart({
  data,
  handelQty,
  handelCheck,
  delayedQuery,
  handelDelete,
}) {
  return (
    <div className="grid grid-cols-4 md:p-5 p-3 col-span-2">
      <div className="flex items-center">
        <div>
          <input
            onChange={() => {}}
            checked={data.status}
            onClick={() => handelCheck(false, data.name)}
            type="checkbox"
            className="appearance-none cursor-pointer focus:ring-0 rounded outline-none h-5 w-5 text-yellow-500"
          />
        </div>
        <img
          className="md:w-32 md:h-32 w-32  h-28 mx-auto object-contain"
          src={data.img}
        />
      </div>
      <div className="col-span-3">
        <div className="border-b-0 border-gray-200">
          <h2 className="md:text-xl text-lg">{data.name}</h2>
        </div>
        <div>
          <div className="flex  flex-col-reverse md:flex-row justify-between mt-2">
            <div className="relative group bg-gray-100 md:w-1/3 rounded-md overflow-hidden">
              <select className="w-full border-0 cursor-pointer bg-transparent p-2 focus:outline-none ">
                {data.branch.map((val, index) => {
                  return (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none transition-all duration-200 absolute top-0 right-0 h-full px-2 bg-yellow-300 group-hover:bg-yellow-400 flex items-center">
                <svg
                  className="fill-current h-4 w-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
            <div className="mb-1">
              <span className="text-sm md:text-base">
                Rp {data.price.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex">
              <button
                onClick={() =>
                  handelQty(false, data.name, data.currentQty, "minus")
                }
                disabled={data.currentQty > 1 ? false : true}
                className="md:w-6 w-5 text-yellow-400 cursor-pointer hover:text-yellow-500 transition-all duration-200 disabled:text-gray-600 focus:outline-none"
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <input
                disabled
                onChange={(val) =>
                  delayedQuery({ name: data.name, qty: val.target.value })
                }
                type="number"
                value={data.currentQty}
                className="bg-transparent border-0 border-b-2 border-gray-200 mx-2.5 focus:outline-none w-10 text-center"
              />
              <button
                onClick={() =>
                  handelQty(false, data.name, data.currentQty, "plus")
                }
                className="md:w-6 w-5 text-yellow-400 disabled:text-gray-600 cursor-pointer hover:text-yellow-500 transition-all duration-200 focus:outline-none"
                disabled={data.currentQty === data.qty ? true : false}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </div>
            <button
              onClick={() => handelDelete(data.name)}
              className="md:w-5 w-4 ml-7 text-red-500 disabled:text-gray-600 cursor-pointer hover:text-red-600 transition-all duration-200 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
