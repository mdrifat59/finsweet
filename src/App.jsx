import React, { createElement } from 'react' 
import './App.css' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './page/Home'
import About from './page/About'
import Sermons from './page/Sermons'
import Blog from './page/Blog'
import ShowCompassion from './component/ShowCompassion'
import SermonEvent from './component/SermonEvent'

function App() { 
let router = createBrowserRouter(
   createRoutesFromElements(
    <Route>
      <Route element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sermon' element={<Sermons/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/showcompassion' element={<ShowCompassion/>}></Route>
        <Route path='/sermonevent' element={<SermonEvent/>}></Route>
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
