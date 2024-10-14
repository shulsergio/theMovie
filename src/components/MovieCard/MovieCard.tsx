import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";
import React from "react";

const defaultImg = "../../assets/rus_fuck.PNG";

interface MovieCardProps {
  id: number;
  title: string;
  poster?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster }) => {
  return (
    <div className={css.card}>
      <Link to={`/movies/${id}`} state={location}>
        <img
          className={css.movieImg}
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg}
          alt={title}
        />
        <p className={css.title}>{title}</p>
      </Link>
    </div>
  );
};
export default MovieCard;
