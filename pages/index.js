import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Fragment } from "react";
import firebase from "../config/config";
const Navbar = dynamic(() => import("../component/navbar/navbar"));
const Search = dynamic(() => import("../component/search/search"));
const Content = dynamic(() => import("../component/content/index"));
const Footer = dynamic(() => import("../component/footer/footer"));

const Shop = ({ res }) => {
  return (
    <Fragment>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen bg-gray-50">
        <div>
          <Navbar />
          <div className=" container  mx-auto flex justify-center py-5">
            <Search />
          </div>
          <div className="container mx-auto my-5">
            <Content datas={res} />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const db = firebase.firestore();
  const getKategoris = await db.collection("kategoris").get();
  const data = getKategoris.docs.map((doc) => ({ ...doc.data() }));
  const res = !getKategoris.empty ? data : [];
  return {
    props: { res },
  };
}

export default Shop;
