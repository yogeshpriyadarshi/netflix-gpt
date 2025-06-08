import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { baseurl } from '../utils/constaint';

export default function SubContainer() {
  const [ filterMovies, setFilterMovies] = useState("All");
  const [ count, setCount] = useState(0);
   const [ movies, setMovies] = useState([]);
   const [posturl, setPosturl] = useState("");
      const nowPlay = useSelector(Store => Store?.movies?.nowPlay);
  const popularMovies = useSelector(Store => Store?.movies?.popularMovies);
    const upComing = useSelector(Store => Store?.movies?.upComing);
  const topRated = useSelector(Store => Store?.movies?.topRated);

const fun = ()=> {
  if(movies?.length){
  setPosturl(baseurl + movies?.[count]?.poster_path)
  }
}

  
  const limitCount = (logic)=> {
    if(logic === "inc"){
      
            if(count<movies?.length-1 )
            {
              setCount(p=>p+1);
            }else{
              setCount(0);
            }
    }else{
        if( count=== 0)
            {
              setCount(movies?.length-1);
            }else{
              setCount(p=>p-1);
            }
    }
  }

useEffect( ()=>{
fun();
},[count, movies])

useEffect( ()=> { 
  if(!movies.length && popularMovies?.length && upComing?.length && topRated?.length&& nowPlay?.length){
setMovies( [...popularMovies,  ...upComing,  ...topRated, ...nowPlay]);
  }
},[popularMovies, upComing, topRated, nowPlay] )


  useEffect( ( )=>{  

    if(filterMovies.includes("Popular"))
    {
      setMovies(popularMovies?popularMovies:[])
setCount(0);
    }else if(filterMovies.includes("Top"))
    {
      setMovies(topRated?topRated:[]);
setCount(0);
    }else
    {
      setMovies(upComing?upComing:[]);
setCount(0);
    }
   },[filterMovies]);


  return (
<>  

<div className='flex justify-around mt-5'> 
<button className='border bg-red-500 py-2 px-5 rounded-2xl active:bg-blue-500' 
onClick={()=>{setFilterMovies("Popular Movies")} } > Popular Movies </button>
<button  className='border bg-red-500 py-2 px-5 rounded-2xl active:bg-blue-500' 
onClick={()=>{setFilterMovies("Top Rated Movies")} } > Top Rated Movies </button>
<button  className='border bg-red-500 py-2 px-5 rounded-2xl active:bg-blue-500' 
onClick={()=>{setFilterMovies("Up Coming Movies")} } > Up Coming Movies </button>
</div>

<div className='flex justify-center'> 
  <h1 className='text-5xl my-5'> {filterMovies}  </h1>
</div>
    <div className='flex justify-between'>
<div className='flex justify-center items-center w-1/3'  > <button className='text-5xl' onClick={()=>{limitCount("dec")}  }>   ⏪  </button>  </div>
{    posturl &&
<img alt='posterlogo' className='h-1/2' src={posturl} />}
<div className='flex justify-center items-center w-1/3'  > <button className='text-5xl'  onClick={()=>{ limitCount("inc")} }>   ⏩  </button>     </div>
    </div>
</>
  )
}
