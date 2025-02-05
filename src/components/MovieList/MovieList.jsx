import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/users/${item.id}`}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
