{
  /* <Routes>
<Route path="/about" element={<About />}></Route>
<Route></Route>
</Routes> */
}
import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getData();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
export default HomePage;
