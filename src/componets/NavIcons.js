import React from "react";

const NavIcons = ({ setTerm, setUrl }) => {
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

  return (
    <div className="pl-2 ">
      <div>
        <button
          onClick={popular}
          className="mr-3 p-2 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Popular
        </button>
      </div>
      <div>
        <button
          onClick={top_rated}
          className="mr-2 p-2 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Top rated
        </button>
      </div>
      <div>
        <button
          onClick={upcoming}
          className="p-2 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase"
        >
          Upcoming
        </button>
      </div>
    </div>
  );
};

export default NavIcons;
