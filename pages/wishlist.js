import React, { Fragment, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../component/navbar/navbar"));
const Content = dynamic(() => import("../component/content/index"));

export default function WishList() {
  const [dummy, setDummy] = useState([
    {
      name: "Acustic Z-201",
      branch: ["Malang", "Yogyakarta", "Jakarta"],
      price: 2000000,
      qty: 5,
      img: "/img/violin.png",
      status: false,
      currentQty: 1,
    },
    {
      name: "Drumsz RZ-201",
      branch: ["Malang", "Yogyakarta", "Jakarta"],
      price: 2000000,
      qty: 7,
      img: "/img/violin.png",
      status: false,
      currentQty: 1,
    },
    {
      name: "Seruling Kj-201",
      branch: ["Malang", "Yogyakarta", "Jakarta"],
      price: 1000000,
      qty: 5,
      img: "/img/violin.png",
      status: false,
      currentQty: 1,
    },
  ]);
  return (
    <Fragment>
      <Head>
        <title>WishList</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto  my-5">
        <h1 className="text-3xl p-5">WishList</h1>
        <div>
          <Content datas={dummy} page={"detail"} />
        </div>
      </div>
    </Fragment>
  );
}
