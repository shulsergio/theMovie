import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";
import React from "react";
import styled from "styled-components";

const defaultImg = "../../assets/rus_fuck.PNG";

interface MovieCardProps {
  id: number;
  title: string;
  poster?: string;
}

const Div = styled.div`
  background: ${(props) => props.theme.mainBodySecondaryColor};
  box-shadow: 4px 4px 8px ${(props) => props.theme.boxShadowCardNormal};
  &:hover {
    box-shadow: 8px 8px 16px ${(props) => props.theme.boxShadowCardHover};
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.textSecondColor};
`;

const MovieCard: React.FC<MovieCardProps> = ({ id, title, poster }) => {
  return (
    <Div className={css.card}>
      <Link to={`/movies/${id}`} state={location}>
        <img
          className={css.movieImg}
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg}
          alt={title}
        />
        <P className={css.title}>{title.slice(0, 28)}</P>
      </Link>
    </Div>
  );
};
export default MovieCard;
