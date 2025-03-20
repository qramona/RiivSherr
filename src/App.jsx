import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/App.css'
import Header from "./components/Layouts/Header/Header"
import Admin from "./pages/AdminsPage/Admin.jsx";


function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Admin />} />
        </Routes>
    </Router>

  )

}


export default App
