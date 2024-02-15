import React, { useState, useEffect } from 'react';
import '../css/Series.css';

function Series() {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const seriesPerPage = 30;

  useEffect(() => {
   
    fetch('/sample.json') 
      .then(response => response.json())
      .then(data => {
        const seriesData = data.entries.filter(entry => entry.programType === "series");
        setSeries(seriesData);
      });
  }, []);

  
  const indexOfLastSeries = currentPage * seriesPerPage;
  
  const indexOfFirstSeries = indexOfLastSeries- seriesPerPage;
  
  const currentSeries = series.slice(indexOfFirstSeries, indexOfLastSeries);

 
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="series-list">
        {currentSeries.map(series => (
          <div key={series.title} className="series-item">
            <img src={series.images['Poster Art'].url} alt={series.title} />
            <div className="series-info">
              <p>{series.title}</p>
              {}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(series.length / seriesPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Series;