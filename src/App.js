import React, { useState, useEffect } from "react";
import "./App.css";
import Images from "./components/Images";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(5);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    getMoviesData();
    window.addEventListener("scroll", (e) => handleScroll(e));
  }, [page]);

  function getMoviesData() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=0ca2f8b99d329e0ef9376fcddadf56ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((response) => {
        const updatedMovies = response.data.results;
        // settotalPages(response.data.totalPages);

        setMovies((movies) => {
          return [...movies, updatedMovies];
        });
        setScrolling(false);
      });
  }
  function loadMore() {
    setPage(page + 1);
    setScrolling(true);
  }
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleScroll(e) {
    const bottomOffset = 20;
    const pageOffset = window.innerHeight + window.scrollY;
    const setHeight = document.body.offsetHeight - bottomOffset;
    if (scrolling) return;
    if (totalPages <= page) {
      return;
    }
    if (pageOffset >= setHeight) {
      loadMore();
    }
  }

  return (
    <>
      <div className="App">
        {movies ? <Images movies={movies} /> : "loading"}
      </div>
    </>
  );
}

export default App;
