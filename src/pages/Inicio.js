import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section>
      <div className="movie-series">
        <div className="movie-card">
          <Link to="/series">
            <div className="image-container">
              <img src={process.env.PUBLIC_URL + '/assets/placeholder.png'} alt="SERIES" />
              <p>Popular Series</p>
            </div>
          </Link>
        </div>
        <div className="movie-card">
          <Link to="/peliculas">
            <div className="image-container">
              <img src={process.env.PUBLIC_URL + '/assets/placeholder.png'} alt="MOVIES" />
              <p>Popular Movies</p>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default Inicio;
