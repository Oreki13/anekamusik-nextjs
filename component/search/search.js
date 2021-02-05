import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [tmpSearch, setTmpSearch] = useState("");

  const searchInput = (e) => {
    let key = e.target.value;
    setTmpSearch(key);
  };

  const searchGo = (key) => {
    if (key.charCode == 13) {
      router.push(`/search/${tmpSearch}`);
    }
  };

  return (
    <div className="md:w-9/12 w-full mx-5 md:mx-0 focus-within:ring ring-blue-200 transition-all duration-300  rounded-2xl bg-gray-200 overflow-hidden">
      <div className=" shadow-md flex justify-between">
        <input
          className="w-11/12 bg-transparent border-0 focus:border-0 focus:ring-0 m-2 p-1 focus:outline-none "
          type="text"
          onChange={searchInput}
          onKeyPress={() => searchGo}
          placeholder="Search"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500  transition-all  duration-200 outline-none focus:outline-none w-14 flex items-center justify-center">
          <div className="w-5 h-5 text-yellow-100 ">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
