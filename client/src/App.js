import React, { useState } from 'react';
import {Route,Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const[movieList,setMovieList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    console.log('add saved list',movie)
  };

  return (

  
    <div>
      
     <SavedList list={savedList}  />
      {/* <div>Replace this Div with your Routes</div> */}
      {/* <nav>
      <Link to={'/'}>Home</Link>
    </nav> */}
      
      <Route exact path = "/">
        
        <MovieList movies={movieList} />
        </Route> 

      <Route path= "/movies/:id" >
        <Movie />
        </Route> 
      
    </div>
  );
};

export default App;