import { useDispatch, useSelector } from "react-redux";

import { options } from "../utils/constaint";
import { useEffect } from "react";
import { addTrailerPlay } from "../utils/moviesSlice";

const useTrailerPlay = (id)=>{
const dispatch = useDispatch();
const URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

const fetchTrailer = async()=>{
    try{
const res = await fetch(URL, options)
const json = await res.json();
const filterTrailer = json?.results?.filter(video => video.type === "Trailer");
const len1 = filterTrailer.length;
    const number1 = Math.floor( len1*Math.random() );
const video = filterTrailer[number1];
dispatch(addTrailerPlay(video));
    }catch(err){
console.error(err);
    }
};

useEffect(()=>{fetchTrailer()},[]);
}

export default useTrailerPlay;