import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
