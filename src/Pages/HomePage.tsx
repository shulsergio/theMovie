import { useEffect, useState } from "react";
import { fetchMovies } from "../components/Service/apiMovies";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ShowList from "../components/ShowList/ShowList";

export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
}

export interface Show {
  id: number;
  name: string;
  poster_path?: string;
  first_air_date?: string;
  vote_average?: number;
}

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Making request to API...");
        const [moviesResponse, showsResponse] = await Promise.all([
          fetchMovies("https://api.themoviedb.org/3/trending/movie/day"),
          fetchMovies("https://api.themoviedb.org/3/trending/tv/day"),
        ]);
        // const response = await fetchMovies(
        //   "https://api.themoviedb.org/3/trending/movie/week"
        // );
        console.log(" moviesResponse.data.results :", moviesResponse.results);
        console.log(" showsResponse.data.results :", showsResponse.results);

        if (!moviesResponse.results.length) {
          return setEmpty(true);
        }

        // results - 20 фильмов/ сериалов, под 1280 беру первые 7 фильмов
        // const firstfilms = results.slice(0, 7);
        setMovies(moviesResponse.results.slice(0, 7));
        setShows(showsResponse.results.slice(0, 7));
      } catch (error) {
        setError(`${error} - Something went wrong`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Rated films</h2>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {empty && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      <h2>Rated TV show</h2>
      {shows.length > 0 && <ShowList shows={shows} />}
    </>
  );
};
export default HomePage;
