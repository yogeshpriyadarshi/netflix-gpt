import React from 'react'
import Title from './Title'
import Trailer from './Trailer'
import { useSelector } from 'react-redux';

export default function MainContainer() {
  const movies = useSelector(store => store.movies.nowPlay);
  const len = movies.length;
    const number = Math.floor( len*Math.random() );
   const {id,original_title, overview} = movies[number];
console.log("id from main",id)
  return (
    <div>
   <div className='my-30 mx-10 w-1/4 absolute '>
      <div className='text-3xl text-white font-bold '> {original_title}  </div>
      <div className=' text-white w-full' > {overview} </div>
    </div>
<Trailer id={id} />
    </div>
  )
}
