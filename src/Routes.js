import { Routes, Route } from 'react-router-dom'


import Login from './components/login/Login'
import HomePage from './components/home page/HomePage'
import './App.css';


export default () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>}>
                
            </Route>

            <Route exact path="/homePage" element={<HomePage/>}>
                
            </Route>
        </Routes>
    )
}