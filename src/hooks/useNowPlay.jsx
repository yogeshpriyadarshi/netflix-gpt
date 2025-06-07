import { useEffect } from "react";
import { addNowPlay } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { options } from "../utils/constaint";

const useNowPlay = () => {
  const dispatch = useDispatch();

  const fetchapi = async () => {
    try {
      const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

      const res = await fetch(URL, options)
      const json = await res.json();
      dispatch(addNowPlay(json?.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);
};

export default useNowPlay;
