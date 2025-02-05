// import s from "./App.module.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="movies/:movieId/cast" element={<MovieCast />} />
          <Route path="movies/:movieId/reviews" element={<MovieReviews />} />
        </Route> */}

        {/* <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="info" element={<h2>Info about user</h2>} />
          <Route path="posts" element={<UserPosts />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
export default App;
