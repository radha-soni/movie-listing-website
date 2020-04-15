import React from "react";
import "./images.css";

export default function Images({ movies }) {
  return (
    <div className="grid-container">
      {movies &&
        movies.map((element) =>
          element.map((ele) => {
            return (
              <div key={ele.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + ele.poster_path}
                  alt="movie-name"
                />
                <p>{ele.title}</p>

                {/* <p>{ele.overview}</p> */}
              </div>
            );
          })
        )}
    </div>
  );
}
