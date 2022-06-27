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
            <div className='flex justify-between align-center px-8 py-8 mb-3
                            shadow-lg text-white font-bold font-mono'>
                <div className='px-3'>
                   <p className='text-3xl bold uppercase'> {term} </p>
                </div>
                <div className='pl-2 '>
                    <button
                        onClick={popular}
                        className='mr-3 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase'
                    >
                        Popular
                    </button>
                    <button
                        onClick={top_rated}
                        className='mr-2 lg:mr-8 text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase'
                    >Top rated
                    </button>
                    <button
                        onClick={upcoming}
                        className='text-sm lg:text-xl hover:bg-zinc-900 rounded-lg transform transition duration-200 ease-in lg:hover:scale-150 uppercase'
                    >Upcoming
                    </button>
                </div>
            </div>
    )
}

export default Navbar
