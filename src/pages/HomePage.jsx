import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedMovies = await fetchMovies();
        setMovies(loadedMovies);
        setIsLoading(false);
      }
      loadMovies();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return "Error while loading movies...";
  }

  return (
    <>
      <MovieList movies={movies} state={{ from: location }} />
    </>
  );
};
export default HomePage;
