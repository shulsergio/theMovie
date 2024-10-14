import { useEffect, useState } from "react";
import { fetchMovies } from "../components/Service/apiMovies";
import MovieList from "../components/MovieList/MovieList";

export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
}

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Making request to API...");
        const { results } = await fetchMovies(
          "https://api.themoviedb.org/3/trending/movie/week"
        );
        console.log(" не пишу если response а только results:", results);
        console.log("+ results.length:", results.length);
        if (!results.length) {
          return setEmpty(true);
        }
        setMovies(results);
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
      <h1>Rated films</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {empty && <p>No movies found.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
export default HomePage;
