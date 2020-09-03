import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = movie => {

  const { title, director, metascore, stars, addToSavedList} = movie;

    // Uncomment this only when you have moved on to the stretch goals
    const saveMovie = () => {
      // const addToSavedList = addToSavedList;
      addToSavedList(movie)
    }

  

  return (
   
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
 
  );
};

export default MovieCard;
