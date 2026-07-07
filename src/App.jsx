import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About />},
    { path: '/projects', element: <Projects /> }
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
