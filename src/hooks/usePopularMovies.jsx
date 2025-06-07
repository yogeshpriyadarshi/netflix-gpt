import { useEffect } from "react";
import { addNowPlay, addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constaint";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const fetchapi = async () => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const res = await fetch(url, options)
      const json = await res.json();
      dispatch(addPopularMovies(json?.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);
};

export default usePopularMovies;
