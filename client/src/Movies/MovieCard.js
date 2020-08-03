import React from 'react';
import {Link,Route} from 'react-router-dom'

const MovieCard = props => {

  // const id = props.match.params.id;
  

  // const { title, director, metascore, stars } = props;
  return (
   
    <Link to ={`/movies/${props.id}`}> 
    <h1>Movie Details</h1>
      <div className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>
      {props.stars && props.stars.map(star=>{
        return(
        <div className="movie-star"> {star}</div>
        )
      })}
      </div>
     </Link>
  
  );
};

export default MovieCard;
