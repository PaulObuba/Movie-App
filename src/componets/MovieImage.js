import React from 'react'

const MovieImage = ({ api }) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <div className="grid grid-cols-3 justify-items-center mx-w-sm rounded">
                {api.map((item, index) => (
                    <div className='max-w-sm mb-2 rounded-lg overflow-hidden shadow-lg' key={index}>
                        <img src={imageUrl + item.poster_path} alt='' className='w-full' />
                        <div className="flex justify-between p-3 font-bold font-mono text-green-500
                                        text-xl max-h-20 overflow-hidden">
                            <p>{item.title}</p>
                            <span>
                                <svg className="w-6 h-6"
                                    fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
                                           4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <p className='px-3 font-bold text-green-500 text-xs font-mono'>
                            Release date: 
                            <span className='text-gray-500 text-xs pr-2'>
                                 {item.release_date}
                            </span>
                        </p>
                        <p className='inline-block rounded-xl max-h-20 overflow-hidden hover:overflow-auto
                       px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-5'>
                            {item.overview}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieImage
