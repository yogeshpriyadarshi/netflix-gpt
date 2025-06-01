import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'

export default function Body() {

const appRouter = createBrowserRouter([
{
path: "/",
element: <Login/>
},
{
path: "/Browse",
element: <Browse/>
}



])


  return (
    <>
    <RouterProvider  router={appRouter} />
  
    
    
    </>
  )
}
