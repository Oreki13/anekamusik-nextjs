import React, { Fragment, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import debounce from "lodash/debounce";
import filter from "lodash/filter";

const Navbar = dynamic(() => import("../component/navbar/navbar"));
const CardCart = dynamic(() => import("../component/content/cardCart"));
const CardOrderSummary = dynamic(() =>
  import("../component/content/cardOrderSummary")
);

export default function Cart() {
  const router = useRouter();
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [checkAll, setCheckAll] = useState(false);

  const delayedQuery = useRef(
    debounce((data) => {
      if (parseInt(data.qty) > 0) {
        handelQty(false, data, parseInt(data.qty), "combo");
      }
    }, 500)
  ).current;

  const handelQty = (init, name, qty, status) => {
    let statusCur = false;
    if (init) {
      let tmpQty = 0;
      let tmpPrice = 0;
      dummy.forEach((val) => {
        tmpQty = tmpQty + val.currentQty;
        tmpPrice = tmpPrice + val.price * val.currentQty;
      });
      setTotalQty(tmpQty);
      setTotalPrice(tmpPrice);
    } else {
      if (status === "plus") {
        const tmp = dummy.map((val, index) => {
          if (val.name === name) {
            statusCur = val.status;
            return { ...dummy[index], currentQty: qty + 1 };
          }
          return dummy[index];
        });
        setDummy(tmp);
        if (statusCur) {
          setTotalQty(totalQty + 1);
          handelPrice(name, "plus", qty + 1);
        }
      } else if (status === "minus") {
        const tmp = dummy.map((val, index) => {
          if (val.name === name) {
            statusCur = val.status;
            return { ...dummy[index], currentQty: qty - 1 };
          }
          return dummy[index];
        });
        setDummy(tmp);
        if (statusCur) {
          setTotalQty(totalQty - 1);
          handelPrice(name, "minus", qty - 1);
        }
      } else if (status === "singeladd") {
        dummy.forEach(
          (val) => val.name === name && setTotalQty(totalQty + val.currentQty)
        );
      } else if (status === "singelminus") {
        dummy.forEach(
          (val) => val.name === name && setTotalQty(totalQty - val.currentQty)
        );
      } else if (status === "combo") {
        const tmp = dummy.map((val, index) => {
          if (val.name === name) {
            statusCur = val.status;
            return { ...dummy[index], currentQty: qty };
          }
          return dummy[index];
        });
        setDummy(tmp);
        if (statusCur) {
          setTotalQty(totalQty + qty);
          handelPrice(name, "minus", qty);
        }
      }
    }
  };

  const handelPrice = (name, status, curent) => {
    dummy.forEach((val) => {
      if (val.name === name) {
        if (status === "plus") {
          setTotalPrice(totalPrice + val.price);
        } else if (status === "minus") {
          setTotalPrice(totalPrice - val.price);
        } else if (status === "combo") {
          setTotalPrice(curent);
        }
      }
    });
  };

  const handelCheck = (init, name) => {
    let tmp = JSON.parse(JSON.stringify(dummy));

    if (init) {
      if (name === "check") {
        setCheckAll(true);
        handelQty(true);
        for (let i in tmp) {
          tmp[i] = { ...tmp[i], status: true };
        }
      } else if (name === "uncheck") {
        setCheckAll(false);
        setTotalQty(0);
        setTotalPrice(0);
        for (let i in tmp) {
          tmp[i] = { ...tmp[i], status: false };
        }
      }
    } else {
      let tmpCurentCheck = 0;
      tmp.map((val, index) => {
        if (val.name === name) {
          let cal = val.price * val.currentQty;
          tmp[index] = { ...tmp[index], status: !tmp[index].status };
          if (tmp[index].status) {
            tmpCurentCheck++;
            let total = cal + totalPrice;
            handelPrice(name, "combo", total);
            handelQty(false, name, val.currentQty, "singeladd");
          } else {
            handelPrice(name, "combo", totalPrice - cal);
            handelQty(false, name, val.currentQty, "singelminus");
          }
        } else {
          if (tmp[index].status) {
            tmpCurentCheck++;
          }
        }
      });
      if (tmpCurentCheck === tmp.length) {
        setCheckAll(true);
        handelQty(true);
      } else {
        setCheckAll(false);
      }
    }
    setDummy(tmp);
  };

  const handelDelete = (name) => {
    if (name === "all") {
      return setDummy([]);
    }
    const drop = filter(dummy, function (val) {
      return val.name !== name;
    });
    setDummy(drop);
  };

  useEffect(() => {
    handelQty(true);
  }, [dummy.length]);

  useEffect(() => {
    handelCheck(true, "check");
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <Navbar />
      <div className="container max-w-6xl  mx-auto md:my-14 my-5 mb-24">
        <div className="p-2">
          <span className="md:text-3xl text-2xl">Keranjang</span>
        </div>
        {dummy.length > 0 ? (
          <div className="flex flex-wrap md:flex-nowrap md:mt-5 justify-between">
            <div className="md:w-3/4 w-full">
              <div className="flex p-5 justify-between z-10 items-center md:sticky top-0 bg-white border-b-4 border-gray-200">
                <div className="flex  items-center">
                  <input
                    onChange={(val) =>
                      handelCheck(
                        true,
                        val.target.checked ? "check" : "uncheck"
                      )
                    }
                    type="checkbox"
                    checked={checkAll}
                    className="appearance-none mr-5 cursor-pointer focus:ring-0 rounded outline-none h-5 w-5 text-yellow-500"
                  />
                  <p>Pilih semua</p>
                </div>
                {checkAll ? (
                  <button
                    onClick={() => {
                      handelDelete("all");
                    }}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    Hapus Semua
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="divide-y-4">
                {dummy.map((data, index) => {
                  return (
                    <CardCart
                      delayedQuery={delayedQuery}
                      handelDelete={handelDelete}
                      handelCheck={handelCheck}
                      handelQty={handelQty}
                      data={data}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
            <CardOrderSummary totalPrice={totalPrice} totalQty={totalQty} />
          </div>
        ) : (
          <div className="w-full h-64 flex flex-col items-center justify-center">
            <p>Keranjang Kosong</p>
            <button
              onClick={() => {
                router.push("/shop");
              }}
              className="bg-yellow-300 rounded-md px-8 mt-2 hover:bg-yellow-400 py-2"
            >
              Mulai Belanja
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}
