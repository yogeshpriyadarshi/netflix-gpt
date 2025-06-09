import React from "react";
import { bgurl } from "../utils/constaint";
import language from "../utils/languageConstant";
import { useSelector } from "react-redux";

export default function GptContainer() {
  const lan = useSelector(store => store.config.language)
  return (
    <>
      <div className="relative h-screen w-screen flex justify-center items-center bg-amber-500 ">
        <img src={bgurl} alt="background" className="h-screen w-screen " />
        <div className="bg-black w-1/2 flex  absolute top-1/2 bottom-1/2 ">
          <input
            placeholder= {language[lan]?.gptPlaceHolder ||"ask anything"} 
            className="bg-red-500 m-2 w-4/5 h-10 text-white"
          />
          <button className="bg-red-500 m-2 w-1/5 h-10">{language[lan].search}  </button>
        </div>
      </div>
    </>
  );
}
