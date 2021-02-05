import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleForm = (event) => {
    let user = { ...user };
    user[event.target.name] = event.target.value;
    setUser(user);
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <div className="bg-gray-100 flex justify-center items-center w-screen h-screen">
        <div className="bg-white rounded-md md:w-1/2 mx-5 w-full shadow-lg py-10">
          <div className="mx-10">
            <div className="text-center">
              <h1 className="text-2xl text-gray-900 font-semibold mb-4">
                Login Page
              </h1>
            </div>
            {error ? (
              <p className="text-center text-red-600">
                Email Atau Password salah
              </p>
            ) : (
              <div></div>
            )}
            <div className=" my-3">
              <input
                type="text"
                className="placeholder-gray-500 focus:outline-none p-1.5 focus:ring-2 focus:ring-yellow-200 border-2 border-gray-100 w-full focus:border-yellow-50 rounded "
                id="email"
                name="email"
                placeholder="Enter Email Address..."
                onChange={handleForm}
                required
              />
            </div>
            <div className="my-3">
              <input
                type="password"
                className="placeholder-gray-500 focus:outline-none p-1.5 focus:ring-2 focus:ring-yellow-200 border-2 border-gray-100 w-full focus:border-yellow-50 rounded"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleForm}
              />
            </div>
            <div className="text-center my-5">
              <button
                type="submit"
                className="bg-yellow-300 focus:ring-4 hover:bg-yellow-400 transition-all duration-300 ring-yellow-100 focus:outline-none  py-2 w-full rounded mx-auto text-gray-800"
                onClick={() => {
                  router.push("/");
                }}
              >
                Login
              </button>
            </div>

            <hr />

            <div className="text-center mt-3 ">
              <Link href={"/register"}>
                <span className="text-yellow-500 cursor-pointer hover:text-yellow-600">
                  Create an Account!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
