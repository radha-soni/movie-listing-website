import React from "react";

export default function Images({ movies }) {
  if (movies) {
    console.log(movies);
  }
  return (
    <>
      {movies
        ? movies.map((element) => {
            return (
              <div key={element.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + element.poster_path}
                  alt="movie-name"
                />
                <p>{element.title}</p>
                <p>{element.overview}</p>
              </div>
            );
          })
        : "loading"}
    </>
  );
}
