import axios from "axios";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWQwMzBkNWI0MGY5YWI1NzhlMjY4Y2I1MzdjNjIxYiIsIm5iZiI6MTczODY4NzgwMC4yMzMsInN1YiI6IjY3YTI0NTM4ODBlNTkzZDVmZGUyZDhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iP-GA8QczE07pwT_FrP5EYij86X6TbQgRa7ajgitnOM",
  },
};

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(
      "/trending/movie/day?language=en-US",
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
export const fetchSearchMovies = async (movieName) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${movieName}&language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMoviesDetails = async (movieId) => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?language=en-US`,
      options
    );
    return data.cast;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(
      `/movie/${movieId}/reviews?language=en-US`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// axios.defaults.baseURL = "https://dummyjson.com";

// export const fetchUserById = async (userId) => {
//   const { data } = await axios.get(`users/${userId}`);
//   return data;
// };

// export const fetchPostsByUserId = async (userId) => {
//   const { data } = await axios.get(`/posts/user/${userId}`);
//   return data.posts;
// };
