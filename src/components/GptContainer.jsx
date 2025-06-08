import React from "react";

export default function GptContainer() {
  return (
    <>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_medium.jpg"
        alt="background"
        className="h-screen w-screen"
      />
      <div className="flex flex-col justify-center items-center  absolute top-0 left-0  bottom-0 right-0">
        <h1 className="text-5xl text-purple-500 m-2 "> GPT search </h1>
          <input
            type="text"
            placeholder="What would you like to watch Today!"
            className="border bg-red-500 text-white w-1/2  h-15 text-3xl m-2"
          />
          <button className="h-15 bg-blue-500 w-20 rounded-2xl m-2">
            {" "}
            search{" "}
          </button>
    
      </div>
    </>
  );
}
