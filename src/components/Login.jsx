import React, { useRef, useState } from "react";
import Header from "./Header";
import validation from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  // const auth = getAuth();

  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  // const [Name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const valid = validation(Email.current.value, Password.current.value);

    if (!valid) {
      setEmailError(valid);
      setPasswordError(valid);
    } else if (valid.includes("Email")) {
      setEmailError(valid);
      setPasswordError(null);
    } else if (valid.includes("Password")) {
      setPasswordError(valid);
      setEmailError(null);
    }
    if (valid) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div>
        {/* <img className="h-screen w-screen" src="https://drive.google.com/file/d/1CQqmDUhwnpwvS4gHygweCnDV9-i5kjI4/view?usp=drive_link" /> */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_medium.jpg"
          alt="background"
          className="h-screen w-screen"
        />
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
              placeholder="Full Name"
              className=" p-2 m-5 bg-gray-900 text-white"
            />
          )}

          <input
            ref={Email}
            type="text"
            placeholder="Email Address"
            className=" p-2 m-5 bg-gray-900 text-white"
          />
          {emailError && (
            <p className="text-red-600 bg-black font-bold"> {emailError}</p>
          )}
          <input
            ref={Password}
            type="text"
            placeholder="Password"
            className=" p-2 m-5 bg-gray-900 text-white "
          />
          {error && <p className="text-red-500 font-bold"> {error} </p>}
          {passwordError && (
            <p className="text-red-500 font-bold"> {passwordError} </p>
          )}
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
