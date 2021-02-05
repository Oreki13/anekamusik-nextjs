import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
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
        <title>Register</title>
        <link rel="icon" href="/myIcon.ico" />
      </Head>
      <div className="w-screen h-screen flex justify-center bg-gray-100 items-center">
        <div className="py-10 md:w-1/2 w-full mx-5 bg-white rounded-md px-10">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Create an Account!
            </h1>
            {error ? (
              <p className="text-center text-red-500">Email Has Registered</p>
            ) : null}
          </div>

          <div className="my-3">
            <input
              type="text"
              className="placeholder-gray-500 focus:outline-none p-1.5 focus:ring-2 focus:ring-yellow-200 border-2 border-gray-100 w-full focus:border-yellow-50 rounded "
              id="name"
              name="fullname"
              placeholder="Full Name"
              onChange={handleForm}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="placeholder-gray-500 focus:outline-none p-1.5 focus:ring-2 focus:ring-yellow-200 border-2 border-gray-100 w-full focus:border-yellow-50 rounded "
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={handleForm}
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              className="placeholder-gray-500 focus:outline-none p-1.5 focus:ring-2 focus:ring-yellow-200 border-2 border-gray-100 w-full focus:border-yellow-50 rounded "
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleForm}
            />
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            type="submit"
            className="bg-yellow-300 focus:ring-4 hover:bg-yellow-400 transition-all duration-300 ring-yellow-100 focus:outline-none   py-2 w-full rounded mx-auto text-gray-800"
          >
            Register Account
          </button>

          <hr />
          {/* <div className="text-center">
                    <a className="small" href="#">
                      Forgot Password?
                    </a>
                  </div> */}
          <div className="text-center mt-3">
            <Link href={"/"}>
              <span>
                Already have an account?{" "}
                <a className="text-yellow-500 hover:text-yellow-600 cursor-pointer">
                  Login!
                </a>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
