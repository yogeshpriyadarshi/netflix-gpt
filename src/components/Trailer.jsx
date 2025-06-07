import { useSelector } from "react-redux";
import useTrailerPlay from "../hooks/useTrailerPlay";

export default function Trailer({ id }) {
    console.log("id",id);
  useTrailerPlay(id);
  const video = useSelector((store) => store.movies.trailerPlay);
  if (!video) return;
  console.log("video", video);
  const trailerKey = video?.key;
  console.log(trailerKey);
  return (
    <div>
      <iframe
       className="w-screen h-screen"
        src=  {`https://www.youtube.com/embed/${trailerKey}?si=GJRyz_5KMC14CHyx`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
