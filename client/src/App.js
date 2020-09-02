import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import {Route,Link} from 'react-router-dom'
import MovieCard from './Movies/MovieCard';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
 console.log('saved movies', savedList)

  return (
    <div>
      <SavedList list={savedList} />
      
      {/* <div style={{color:'#151515',textDecoration:'none',background:'lightskyblue', width:'10%',padding:'1%',}}>
     
      </div> */}
      
      
      <Route exact  path='/'>
        <MovieList/>
      </Route >
      <Route path={`/movies/:movieId`}>
        <Movie addToSavedList={addToSavedList}/>
      </Route>
    </div>
  );
};

export default App;
