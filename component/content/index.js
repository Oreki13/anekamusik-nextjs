import dynamic from "next/dynamic";
import React from "react";

const CardItem = dynamic(() => import("./itemCategory"));

export default function ContentIndex({ datas, page }) {
  return (
    <div>
      {datas.length > 0 ? (
        <div className="grid auto-cols-auto px-5 m-auto sm:w-full md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-x-5 gap-y-5">
          {datas.map((data, index) => {
            return (
              <div className="mx-auto" key={index}>
                <CardItem
                  name={data.name}
                  img={data.img}
                  page={
                    page === "detail"
                      ? `item/${data.name}`
                      : data.name.toLowerCase()
                  }
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Items Found!</p>
        </div>
      )}
    </div>
  );
}
