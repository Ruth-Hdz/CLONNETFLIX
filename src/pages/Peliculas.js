import React, { useState, useEffect } from 'react';
import '../css/Peliculas.css';

function Peliculas() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 30;

  useEffect(() => {
   
    fetch('/sample.json') 
      .then(response => response.json())
      .then(data => {
        const moviesData = data.entries.filter(entry => entry.programType === "movie");
        setMovies(moviesData);
      });
  }, []);

  
  const indexOfLastMovie = currentPage * moviesPerPage;
  
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

 
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="movie-list">
        {currentMovies.map(movie => (
          <div key={movie.title} className="movie-item">
            <img src={movie.images['Poster Art'].url} alt={movie.title} />
            <div className="movie-info">
              <p>{movie.title}</p>
              {}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;