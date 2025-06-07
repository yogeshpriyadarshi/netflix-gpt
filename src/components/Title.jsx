import React from 'react'
import { useSelector } from 'react-redux'

export default function Title() {
  const movies = useSelector(store => store.movies.nowPlay);
  const len = movies.length;
    const number = Math.floor( len*Math.random() );
   const {id,original_title, overview} = movies[number];
  return (
    <div className='m-30 bg-black '>
      <div className='text-3xl text-red-500 font-bold '> {original_title}  </div>
      <div className='text-2xl text-red-500 w-1/4 ' > {overview} </div>
    </div>
  )
}
