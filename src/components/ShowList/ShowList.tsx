import React from "react";
import css from "./ShowList.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Show } from "../../Pages/HomePage";

interface ShowListProps {
  shows: Show[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <>
      <ul className={css.box}>
        {shows.map((show) => (
          <li key={show.id} className={css.showItem}>
            <MovieCard
              id={show.id}
              title={show.name}
              poster={show.poster_path}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ShowList;
