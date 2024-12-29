import React, { createElement } from 'react' 
import './App.css' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './page/Home'
import About from './page/About'
import Sermons from './page/Sermons'
import Blog from './page/Blog'

function App() { 
let router = createBrowserRouter(
   createRoutesFromElements(
    <Route>
      <Route element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sermon' element={<Sermons/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Route>
    </Route>
  )
)
  return (
    <> 
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
