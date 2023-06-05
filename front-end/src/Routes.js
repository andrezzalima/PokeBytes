import { Routes, Route } from 'react-router-dom'
//css
import './App.css';
//componentes
import Login from './components/login/Login'
import HomePage from './components/home page/HomePage'
import Profile from './components/home page/Profile';
import TermsAndConditions from './components/home page/TermsAndConditions';
import PrivacyPolicy from './components/home page/PrivacyPolicy';
<<<<<<< HEAD
import PokeBag from './components/home page/PokeBag/PokeBag';
import TradeMachine from './components/home page/tradeMachine/TradeMachine';
=======
import PrivacyPolicy from './components/home page//PokeCards';
>>>>>>> 89c8fb89145da1e1dd837750de32f18a7d00ae0e


export default () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>}>
            </Route>
            <Route exact path="/homePage" element={<HomePage/>}> 
            </Route>
            <Route exact path="/profile" element={<Profile/>}> 
            </Route>
            <Route exact path="/terms-and-conditions" element={<TermsAndConditions/>}> 
            </Route>
            <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}> 
            </Route>

            <Route exact path="/homePage/pokeBag" element={<PokeBag/>}> 
            </Route>
            <Route exact path="/homePage/tradeMachine" element={<TradeMachine/>}> 

            <Route exact path="homePage/pokecards" element={<PokeCards/>}> 

            </Route>
        </Routes>
    )
}