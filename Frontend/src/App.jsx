import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Start from './pages/Start.jsx';
import UserLogin from './pages/UserLogin.jsx';
import UserSignup from './pages/UserSignup.jsx';
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import Home from './pages/Home.jsx';
import CaptainHome from "./pages/CaptainHome.jsx";


function App() {
  
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path='/home' element={<Home />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path='/captain-home' element={ <CaptainHome />} />
      </Routes>
    </div>
  )
}

export default App
