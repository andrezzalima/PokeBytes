import { Routes, Route } from 'react-router-dom'
//css
import './App.css';
//componentes
import Login from './components/login/Login'
import HomePage from './components/home page/HomePage'
import Profile from './components/home page/Profile';
import TermsAndConditions from './components/home page/TermsAndConditions';
import PrivacyPolicy from './components/home page/PrivacyPolicy';
import TradeMachine from './components/home page/trademachine/TradeMachine';
import PokeBag from './components/home page/pokebag/PokeBag';


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
            </Route>
        </Routes>
    )
}