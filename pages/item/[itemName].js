import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import firebase from "../../config/config";

const Navbar = dynamic(() => import("../../component/navbar/navbar"));
const Content = dynamic(() => import("../../component/content/detail"));
const Footer = dynamic(() => import("../../component/footer/footer"));

export default function Shop({ res, qty, param }) {
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <Fragment>
      <Head>
        <title>{param ? toTitleCase(param) : "Detail"}</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />

        <div className="container my-5 mx-auto ">
          {res ? (
            <div>
              {res.status ? (
                <Content data={res} qty={qty} />
              ) : (
                <div>
                  <p>Itesm Not Founds</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p>loading</p>
            </div>
          )}
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
    .where("name", "==", params.itemName)
    .get();
  const data = getItems.docs.map((val) => ({ status: true, ...val.data() }));
  const res = !getItems.empty ? data[0] : [{ status: false }];
  const calQty = () => {
    let qty = 0;
    if (!getItems.empty) {
      data[0].branch.map((val) => {
        qty += val.qty;
      });
    }
    return qty;
  };

  const qty = calQty();
  return {
    props: { preview, param: params.itemName, res, qty: qty },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
