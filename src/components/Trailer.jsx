import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Trailer() {
  const [trailerKey, setTrailerKey] = useState("");
  const video = useSelector((store) => store.movies.trailerPlay);

  const fun = ()=>{
     if(video){
      const key = video?.key;
       setTrailerKey(key);
     }
  }

useEffect(()=>{fun()},[video])

  return (
    <div>
      <iframe
       className="w-screen h-screen"
        src=  {`https://www.youtube.com/embed/${trailerKey}?si=GJRyz_5KMC14CHyx`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
