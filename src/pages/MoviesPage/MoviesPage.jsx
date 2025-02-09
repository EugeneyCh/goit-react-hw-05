import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

function MoviesPage() {
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [listMovies, setListMovies] = useState();
  const [isError, setIsError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get("movieName");
  const location = useLocation();

  useEffect(() => {
    if (movieName) {
      setSearchName(movieName);
    }
  }, [movieName]);

  useEffect(() => {
    if (!movieName) return;

    const loadMovies = async () => {
      setIsLoading(true);
      try {
        const loadedSearchMovies = await fetchSearchMovies(movieName);
        setListMovies(loadedSearchMovies.results);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
        setHasSearched(true);
      }
    };

    loadMovies();
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchName.trim();
    if (!query) return;

    setSearchParams({ movieName: query });
  };

  if (isError) {
    return "Error while loading movies...";
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={s.searchBox}>
        <input
          className={s.search}
          type="text"
          name="movieName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <div>
        {listMovies && listMovies.length > 0 && (
          <MovieList movies={listMovies} />
        )}
        {hasSearched && !isLoading && listMovies.length === 0 && (
          <p>Фільми не знайдено. Спробуйте інший запит.</p>
        )}
      </div>
    </>
  );
}
export default MoviesPage;
