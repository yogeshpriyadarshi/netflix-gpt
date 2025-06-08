import { useEffect, useState } from "react";
import Trailer from "./Trailer";
import useTrailerPlay from '../hooks/useTrailerPlay';

import { useSelector } from "react-redux";

export default function MainContainer() {
  const [selectedMovies, setSelectedMovies] = useState(null);
  const movies = useSelector((store) => store.movies.nowPlay);
  console.log("movies in maincontairne",movies);
  console.log("selected",selectedMovies);
      useTrailerPlay(selectedMovies?.id);

  const fun = () => {
    if (movies) {
      const length = movies?.length;
      console.log("lenght",length);
      const number = Math.floor(length * Math.random());
      console.log("number",number)
      console.log("selected movies in fun!",movies[number]);
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
