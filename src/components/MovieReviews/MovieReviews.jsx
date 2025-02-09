import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";
import s from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    try {
      async function loadMovies() {
        const Reviews = await fetchMovieReviews(movieId);
        setMovieReviews(Reviews);
        setIsLoading(false);
      }
      loadMovies();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
    }
  }, [movieId]);

  if (isError) {
    return "Error while loading reviews information...";
  }

  if (isLoading) {
    return <Loader />;
  }

  if (movieReviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }
  return (
    <>
      <ul className={s.reviewsNotes}>
        {movieReviews.map(({ id, author, content }) => {
          return (
            <li style={{ margin: "5px 0 0 10px" }} key={`${id}`}>
              <h3> {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieReviews;
