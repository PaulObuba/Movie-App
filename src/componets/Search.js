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
            <form className=' flex justify-end mb-3 shadow-xl' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='search movie'
                    className=' bg-indigo-800 mr-3 px-2 text-white focus:outline-none rounded'
                    value={search}
                    onChange={handleSearch}
                    />
                <button
                    type='submit'
                    className='flex-shrink-0 bg-indigo-800 hover:bg-indigo-500 border-indigo-800
                         hover:border-indigo-500 text-sm border-4 text-white px-1 rounded'>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Search;
