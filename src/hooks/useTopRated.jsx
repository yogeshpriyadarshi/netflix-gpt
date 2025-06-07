import { useEffect } from "react";
import { addTopRated } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constaint";

const useTopRated = () => {
  const dispatch = useDispatch();
  const fetchapi = async () => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const res = await fetch(url, options)
      const json = await res.json();
      dispatch(addTopRated(json?.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);
};

export default useTopRated;
