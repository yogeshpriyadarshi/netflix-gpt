import { useEffect, useState } from "react";
import Trailer from "./Trailer";
import useTrailerPlay from '../hooks/useTrailerPlay';

import { useSelector } from "react-redux";

export default function MainContainer() {
  const [selectedMovies, setSelectedMovies] = useState(null);
  const movies = useSelector((store) => store.movies.nowPlay);
      useTrailerPlay(selectedMovies?.id);

  const fun = () => {
    if (movies) {
      const length = movies?.length;
      const number = Math.floor(length * Math.random());
      setSelectedMovies(movies[number]);
  
    }
  };

  useEffect(()=>{
    fun()
  },[movies])

  return (
    <div>
      <div className="my-30 mx-10 w-1/4 absolute ">
              <div className=" text-white font-bold text-3xl"> {selectedMovies?.original_title} </div>

        <div className=" text-white w-full "> {selectedMovies?.overview} </div>
      </div>
      <Trailer   />
    </div>
  );
}
