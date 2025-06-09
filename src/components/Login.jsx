import React, { useRef, useState } from "react";
import Header from "./Header";
import validation from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgurl } from "../utils/constaint";

export default function Login() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

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
          updateProfile(user, {
            displayName: Name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
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
        <img
        src ={bgurl}
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
          <button className="text-white text-2xl bg-red-700  p-2 m-5 cursor-pointer active:bg-blue-500">
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
