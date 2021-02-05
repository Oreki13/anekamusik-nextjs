import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import firebase from "../config/config";
const Navbar = dynamic(() => import("../component/navbar/navbar"));
const Search = dynamic(() => import("../component/search/search"));
const Content = dynamic(() => import("../component/content/index"));
const Footer = dynamic(() => import("../component/footer/footer"));

export default function Shop({ res, param }) {
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  return (
    <Fragment>
      <Head>
        <title className="capitalize">{toTitleCase(param)}</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <div className="container mx-auto">
            <div className="  flex justify-center py-5">
              <Search />
            </div>
            <div className=" my-5">
              <Content datas={res} page={"detail"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const db = firebase.firestore();
  const getItems = await db
    .collection("items")
    .where("kategori", "==", params.type)
    .get();
  const data = getItems.docs.map((val) => ({ ...val.data() }));
  const res = !getItems.empty ? data : [];
  return {
    props: { preview, param: params.type, res },
  };
}

export async function getStaticPaths() {
  const db = firebase.firestore();
  const getKategoris = await db.collection("kategoris").get();
  const res = getKategoris.docs.map((doc) => ({
    params: { type: doc.data().name.toLowerCase() },
  }));
  return {
    paths: res,
    fallback: false,
  };
}
