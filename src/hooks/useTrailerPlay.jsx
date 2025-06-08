import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constaint";
import { useEffect } from "react";
import { addTrailerPlay } from "../utils/moviesSlice";

const useTrailerPlay = (id)=>{
    console.log("id trailer",id)
const dispatch = useDispatch();
const URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

const fetchTrailer = async()=>{
    try{
        console.log("count!!")
const res = await fetch(URL, options)
const json = await res.json();
const filterTrailer = json?.results?.filter(video => video.type === "Trailer");
    const number = Math.floor( filterTrailer?.length*Math.random());
const video = filterTrailer[number];
dispatch(addTrailerPlay(video));
    }catch(err){
console.error(err);
    }
};

useEffect(()=>{fetchTrailer(),[id]});
}

export default useTrailerPlay;