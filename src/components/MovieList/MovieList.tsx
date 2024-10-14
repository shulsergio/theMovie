import React from "react";
import css from "./MovieList.module.css";
import { Movie } from "../../Pages/HomePage";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <>
      <ul className={css.box}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItem}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
            />
            {/* <Link to={`/movies/${movie.id}`}> </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
