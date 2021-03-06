import React, { useState } from "react";
import NavIcons from "./NavIcons";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = ({ setTerm, setUrl, term }) => {
  const [navIcon, setNavIcon] = useState(false);

  const popular = () => {
    setTerm("popular");
    setUrl(
      `https://api.themoviedb.org/3/movie/popular?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`
    );
  };
  const top_rated = () => {
    setTerm("top_rated");
    setUrl(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`
    );
  };
  const upcoming = () => {
    setTerm("upcoming");
    setUrl(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`
    );
  };

  const handleChange = () => {
    setNavIcon(!navIcon);
  };

  return (
    <div
      className="flex justify-between align-center px-8 py-8 mb-3
                            shadow-lg text-white font-bold font-mono"
    >
      <div className="px-3">
        <p className="lg:text-3xl bold uppercase"> {term} </p>
      </div>

      <div className="lg:hidden w-7 text-white z-50" onClick={handleChange}>
        {navIcon ? <XIcon /> : <MenuIcon />}
      </div>

      {/* large NavIcon */}
      <div className="hidden lg:flex">
        <button
          onClick={popular}
          className="mr-3 p-2 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Popular
        </button>
        <button
          onClick={top_rated}
          className="mr-2 p-2 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Top rated
        </button>
        <button
          onClick={upcoming}
          className="p-2 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Upcoming
        </button>
      </div>
      {/* large NavIcon */}

      {navIcon ? (
        <div className="absolute right-10 top-14 flex flex-col align-middle justify-center w-32 h-32 bg-zinc-800 text-2xl text-center rounded-md z-50">
          <NavIcons setTerm={setTerm} setUrl={setUrl} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;

// <NavIcons setTerm={setTerm} setUrl={setUrl} />
