import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { fetchMovieCast } from "../../services/api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedActors, setLoadedActors] = useState([]);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const loadedActors = await fetchMovieCast(movieId);
        setLoadedActors(loadedActors);
        setIsLoading(false);
      }
      loadMovies();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  if (isError) {
    return "Error while loading casting information...";
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 style={{ marginLeft: "25px" }}>Actors</h1>

      <div>
        <ul className={s.imageGallery}>
          {loadedActors.map(({ id, character, name, profile_path }) => {
            if (profile_path) {
              return (
                <li key={`${id}`}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : defaultImg
                    }
                    alt={`${name}`}
                    className={s.actorsImg}
                  />
                  <p>{`${name}`}</p>
                  <p>Chapter: {`${character}`}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieCast;
