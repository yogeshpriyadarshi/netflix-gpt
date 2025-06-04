import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
const logoutHandle = ()=>{
  console.log("logout")
signOut(auth).then(() => {
  navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


}

  return (
<>    
<div className='absolute px-8 py-2 w-screen flex justify-between bg-gradient-to-b  from-black'>  
<img className='w-45 ' 
src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='logo' /> 

<div className='m-10'> 
<button className='bg-red-500 text-white px-5 py-2 rounded-2xl cursor-pointer active:bg-blue-500' 
onClick={()=>{logoutHandle()}}
>  Log Out</button>

</div>

     </div> 

     </>
  )
}
