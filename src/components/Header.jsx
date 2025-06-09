import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { addGptStatus } from "../utils/moviesSlice";
import { LANGUAGEOPTION, logourl } from "../utils/constaint";
import { addLanguage } from "../utils/configSlice";

export default function Header() {
  const gpt = useSelector((store) => store?.movies?.GptStatus);
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

  const langHandler = (e)=>{
dispatch(addLanguage(e.target.value));
  }

  const logoutHandle = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 px-8 py-2 w-screen flex justify-between bg-gradient-to-b  from-black">
        <img className="w-45 " src={logourl} alt="logo" />

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
          <>
            <div className="m-10">
              {gpt && (
                <select className="bg-gray-500 mx-4 text-white rounded-lg h-10" 
                onChange={langHandler}>
                  {LANGUAGEOPTION.map((lan) => (
                    <option key={lan.Val} value={lan.Val} >
                      {" "}
                      {lan.Name}{" "}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-2xl cursor-pointer active:bg-blue-500"
                onClick={() => {
                  dispatch(addGptStatus(!gpt));
                }}
              >
                {gpt ? "Home Netflix" : "GPT"}
              </button>
            </div>

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
          </>
        )}
      </div>
    </>
  );
}
