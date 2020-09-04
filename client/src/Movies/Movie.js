import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link,Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import MovieCard from './MovieCard'

const Movie = (props) => {
  const [movie, setMovie] = useState();

  let {movieId}= useParams();
  
  useEffect(() => {

    // const id = props.match.params.id;
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${movieId}`)
        .then(response => {
          setMovie(response.data);
    
        })
        .catch(error => {
          console.error(error);
        });

  },[movieId]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    
      addToSavedList(movie)
    
  }
    

  if (!movie) {
    return <div>Loading movie information...</div>;
  }


  
  return (
    
    
      <div className="save-wrapper">
      <div className="movie-card">
  
           <MovieCard title={movie.title} director={movie.director} 
           metascore = {movie.metascore} stars = {movie.stars}/>
        
      </div>
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
    
  );
}

export default Movie;
