import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constaint";
import { useEffect } from "react";
import { addTrailerPlay } from "../utils/moviesSlice";

const useTrailerPlay = (id) => {
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    try {
      const URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const res = await fetch(URL, options);
      const json = await res.json();
      const filterTrailer = json?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const number = Math.floor(filterTrailer?.length * Math.random());
      const video = filterTrailer[number];
      dispatch(addTrailerPlay(video));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

    if (id) {

      fetchTrailer();
    }
  }, [id]);
};

export default useTrailerPlay;
