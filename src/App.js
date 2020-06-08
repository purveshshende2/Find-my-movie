import React, { useReducer} from "react";
import Movie from './Components/Movie/Movie';
import Search from './Components/Search/Search';
import find from './Components/find.png';
import Header from './Components/Header/Header';
import { initialState, reducer } from './Components/reducer/Reducer';
import axios from "axios";

import './App.css';
import About from "./Components/About/About";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  


  // const refreshPage = () => {
  //   window.location.reload();
  // };

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=b50cb8ab`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };


      const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <div className = 'f1 center'>
            <h4 className = 'f2 center'>Find your favorite Movies</h4>
            <img src = {find} className = 'w-50' alt='movie'/>
            <h4 className = 'f4 center'>Made with ❤ By <a href = 'https://www.instagram.com/coder_purvesh/' className = 'no-underline '>Coder_purvesh</a></h4>
      </div>
      ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : 
    
    (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

 


  return (
    <div className="App">
       <div className="m-container">
        <Header/>
        <Search search={search} />
        <div className="movies">{retrievedMovies}</div>
      </div>
      <About/>
    </div>
  );
}

export default App;
