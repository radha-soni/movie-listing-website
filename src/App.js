import React, { useState, useEffect } from "react";
import "./App.css";
import Images from "./components/Images";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(3);

  useEffect(() => {
    getMoviesData();
  }, [page]);

  function getMoviesData() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=0ca2f8b99d329e0ef9376fcddadf56ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((response) => {
        const movies = response.data.results;
        setMovies(movies);
      });
  }
  function loadMore() {
    setPage(page + 1);
  }

  return (
    <>
      <div className="App">
        <button onClick={loadMore}>Load More</button>
        {movies ? <Images movies={movies} /> : "loading"}
      </div>
    </>
  );
}

export default App;
