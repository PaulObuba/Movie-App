import React, { useState, useEffect } from 'react'
import Footer from './componets/Footer';
import MovieImage from './componets/MovieImage';
import Navbar from './componets/Navbar';
import Search from './componets/Search';

function App() {
  const [api, setApi] = useState([]);
  const [term, setTerm] = useState('popular');
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/${term}?api_key=e0515b297f76b6f660c169e9fe56b7b7&language=en-US&page=1`)

  const fetchAPI = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setApi(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchAPI()
  }, [url])

  return (
    <div className='bg-zinc-900'>
      <Navbar setTerm={setTerm} term={term} setUrl={setUrl} />

      <div className='container mx-auto'>
        <Search setTerm={setTerm} setUrl={setUrl} />

          {api.length === 0 && <h1 className='text-3xl font-bold text-gray flex
                                   justify-center h-screen mt-20 font-mono'>
                                  No Resault Found...
                                </h1>}

        <MovieImage api={api} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
