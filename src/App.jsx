import React, { createElement } from 'react' 
import './App.css'
import Navbar from './layout/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './page/Home'
import About from './page/About'

function App() { 
let router = createBrowserRouter(
   createRoutesFromElements(
    <Route>
      <Route element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
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
