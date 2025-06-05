import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './app/App.css'
import Auth from './modules/auth/Auth'
import Registration from './modules/registration/registration'
import UserPage from './pages/UserPage/UserPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/UserPage" element={<UserPage />}></Route>
            </Routes>
        </Router>
    )
}

export default App
