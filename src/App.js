import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import AdminLogin from "./components/AdminLogin"
import Rooms from "./components/Rooms"
import Register from "./components/Register"
import Admindash from "./components/Admindash"
import Contact from "./components/Contact"
import BookForm from "./components/BookForm"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
import "./index.css"

import Login from "./components/Login"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/rooms' element={<Rooms />}/>
        <Route exact path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route exact path='/admindash' element={<Admindash />} />
        <Route exact path='/bookform' element={<BookForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}