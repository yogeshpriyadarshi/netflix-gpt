import React, { useEffect } from "react";
import Login from "./Login";
import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

export default function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

useEffect(()=>{  
onAuthStateChanged(auth, (user)=>{
if(user) {
  const { uid, email, nameDisplay} = user;
dispatch(adduser({uid:uid, email:email, nameDisplay:nameDisplay}));
}else{
dispatch(removeUser());
}
})
},[]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
