import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-yellow-300 flex p-3 shadow-md justify-between items-center">
      <Link href={"/"}>
        <span className="cursor-pointer">
          <img src="/img/navbar.png" width="100" height="45" />
        </span>
      </Link>
      <div>
        <Link href="#">
          <button
            onClick={() => router.push("/login")}
            className="bg-yellow-500 text-gray-800 focus:ring-4 ring-yellow-400 hover:text-white flex items-center focus:outline-none hover:bg-yellow-600 transition-all duration-300 px-5 py-2 rounded"
          >
            <FontAwesomeIcon className="w-4 h-4 mr-2 " icon={faSignInAlt} />
            {" Login"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
