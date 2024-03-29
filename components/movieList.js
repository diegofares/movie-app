import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt={movie.Title}></img>
                    <div className="overlay d-flex align-items-center justify-content-center"></div>
                </div>

            ))}
        </>

    )
}

export default MovieList