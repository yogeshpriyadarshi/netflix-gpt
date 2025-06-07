import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Header() {
  const user = useSelector((store) => store.user);
const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logoutHandle = () => {
    console.log("logout");
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="fixed top-0  px-8 py-2 w-screen flex justify-between bg-gradient-to-b  from-black">
        <img
          className="w-45 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        {user && (
          <div className="m-2 flex ">
            <h1 className="mx-5 text-4xl py-2 text-white ">
              {" "}
              {user?.displayName}{" "}
            </h1>
            <img className="h-15 w-15" alt="profile-pic" src={user?.photoURL} />
          </div>
        )}

        {user && (
          <div className="m-10">
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-2xl cursor-pointer active:bg-blue-500"
              onClick={() => {
                logoutHandle();
              }}
            >
              {" "}
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
