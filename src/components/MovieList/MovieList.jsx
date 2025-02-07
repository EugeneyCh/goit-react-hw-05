import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    // <div>
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={`/users/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    // </div>
  );
};
export default MovieList;
