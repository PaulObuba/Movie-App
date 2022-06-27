import React, { useState, useEffect } from 'react';

const Search = ({ setUrl, setTerm }) => {
  const [search, setSearch] = useState('');

 const handleSearch = (e) => {
     setSearch(e.target.value)
 }

 const handleSubmit = (e) => {
     e.preventDefault();
     
     setUrl(`https://api.themoviedb.org/3/search/movie?api_key=e0515b297f76b6f660c169e9fe56b7b7&query=${search}`);

     setSearch('');

     setTerm(search)
 }
    return (
        <div>
            <form className=' flex justify-end mb-3' onSubmit={handleSubmit}>
                <input
            type="text"
            placeholder="search movie here..."
            className="border border-gray-500 bg-gray-300 text-black outline-none w-4/5 p-2 m-auto mb-5 rounded-md"
            value={search}
            onChange={handleSearch}
          />
            </form>
        </div>
    )
}

export default Search;
