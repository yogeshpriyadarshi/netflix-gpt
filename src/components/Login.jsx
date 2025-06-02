import React, { useRef, useState } from "react";
import Header from "./Header";
import validation from "../utils/validation";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);


  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  // const [Name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const submitHandler = (e) =>{
     e.preventDefault();
    const valid =validation(Email.current.value, Password.current.value);
 
    if(!valid){
  setEmailError(valid);
  setPasswordError(valid);
}else if(valid.includes("Email")) {
  setEmailError(valid);
}else if(valid.includes("Password")){
 setPasswordError(valid);
}




  };

  return (
    <>
      <Header />
      <div>
        <img src="image\netflix-background.jpg" className="h-screen w-screen" />
        <form
          onSubmit={submitHandler}
          className="bg-black opacity-60 w-1/4 absolute top-1/7 left-1/3 flex flex-col "
        >
          <div className="flex justify-center">
            {" "}
            <p className="text-white font-extrabold text-3xl">
              {" "}
              {isLogin ? "Log In" : "Sign Up"}{" "}
            </p>
          </div>
          {!isLogin && (
            <input
              ref={Name}
              type="text"
              placeholder="Name"
              className=" p-2 m-5 bg-gray-900 text-white"
            />
          )}

          <input
            ref={Email}
            type="text"
            placeholder="Email Address"
            className=" p-2 m-5 bg-gray-900 text-white"
          />
          {emailError && (<p className="text-red-600 bg-black"> {emailError}</p>)}
          <input
            ref={Password}
            type="text"
            placeholder="Password"
            className=" p-2 m-5 bg-gray-900 text-white"
          />
{passwordError&& (<p className="text-red-500"> {passwordError} </p>)}
          <button className="text-white text-2xl bg-red-700  p-2 m-5 cursor-pointer">
            {isLogin ? " Log In" : "Sing UP"}
          </button>
          <div className="flex">
            <p className="text-white m-2 ">
              {isLogin ? "New to Netflix?" : "Already Account"}{" "}
            </p>
            <p
              onClick={() => {
                setIsLogin((p) => !p);
              }}
              className="text-white my-2 font-bold cursor-pointer"
            >
              {isLogin ? "Sign Up Now" : "Login Now "}
            </p>
          </div>
        </form>



        
      </div>

      <footer className="bg-black h-25 w-screen">
        <h1 className="text-white">Need help!</h1>
      </footer>
    </>
  );
}
