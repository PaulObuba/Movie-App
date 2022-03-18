import React from 'react'

const Navbar = ({ setTerm, term, setUrl }) => {

    const popular = () => {
        setTerm('popular')
        setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`)
    }
    const top_rated = () => {
        setTerm('top_rated')
        setUrl(`https://api.themoviedb.org/3/movie/top_rated?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`)
    }
    const upcoming = () => {
        setTerm('upcoming')
        setUrl(`https://api.themoviedb.org/3/movie/upcoming?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`)
    }

    return (
        <div>
            <div className='flex justify-between align-center px-8 py-4 mb-3 border-b-2 
                            shadow-lg bg-black text-white font-bold font-mono'>
                <div className='p-3'>
                   <p className='text-xl bold'> {term} </p>
                </div>
                <div className='pl-2 '>
                    <button
                        onClick={popular}
                        className='p-3 hover:bg-zinc-900 rounded-lg hover:text-xl'
                    >
                        Popular
                    </button>
                    <button
                        onClick={top_rated}
                        className='p-3 hover:bg-zinc-900 rounded-lg hover:text-xl'
                    >Top rated
                    </button>
                    <button
                        onClick={upcoming}
                        className='p-3 hover:bg-zinc-900 rounded-lg hover:text-xl'
                    >Upcoming
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
