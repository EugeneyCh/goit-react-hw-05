import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMoviesDetails } from "../services/api";
import s from "./MovieDetailsPage.module.css";
import Loader from "../components/Loader/Loader";

const url = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState(null);

  const backLinkLocationRef = useRef(location.state?.from ?? "/");

  const goBackHandler = () => navigate(backLinkLocationRef.current);

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedMovie = await fetchMoviesDetails(movieId);
        setMovie(loadedMovie);
        setIsLoading(false);
      }
      loadMovies(movieId);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <button onClick={goBackHandler}>Go back</button>
      <div className={s.movieAbout}>
        <div>
          <img
            className={s.titleImage}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div style={{ marginLeft: " 10px" }}>
          <h2>{movie.title}</h2>
          <p>User score:{Math.ceil(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={s.genresList}>
            {movie.genres.map(({ id, name }) => {
              return (
                <li style={{ margin: "5px 0 0 10px" }} key={`${id}`}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
