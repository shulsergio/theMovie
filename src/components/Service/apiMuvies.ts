import axios from "axios";
// import { Response } from "./types";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjAzOTlhZWEwZThjMzhhODI0YjRlYjUwZmI0N2FhOCIsIm5iZiI6MTcyNTgxODE1NC4zOTUyMjUsInN1YiI6IjY2ZGRkZTYwNjNiYjQxNTRmNmVjNzA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wktgDJHwuLIw5bMdqXTjm7_T5TxEnRMoNvXtxTslE8k";



export const fetchMovies = async (url:string) => {
  // const url = "https://api.themoviedb.org/3/trending/movie/week";
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  };

  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
