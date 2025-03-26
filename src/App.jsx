import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/App.css'
import Admin from "./pages/AdminsPage/Admin";
import Auth from "./modules/auth/Auth";
import Registration from "./modules/registration/registration";


function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="registration" element={<Registration/>}></Route>
        </Routes>
    </Router>

  )

}


export default App
