import { Routes, Route } from 'react-router-dom';
//css
import './App.css';
//componentes
import Login from './components/login/Login';
import HomePage from './components/home_page/HomePage';
import Profile from './components/home_page/Profile';
import TermsAndConditions from './components/home_page/TermsAndConditions';
import PrivacyPolicy from './components/home_page/PrivacyPolicy';
import PokeBag from './components/home_page/PokeBag/PokeBag';
import TradeMachine from './components/home_page/tradeMachine/TradeMachine';
import PokeCards from './components/home_page/PokeCards/PokeCards';
import FAQ from './components/home_page/FAQ';
import PokeCoins from './components/home_page/PokeCoins/PokeCoins';
import Battle from './components/home_page/Battle/Battle';




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
            
            <Route exact path="/faq" element={<FAQ/>}> </Route>

            <Route exact path="/homePage/pokeBag" element={<PokeBag/>}> 
            </Route>
            <Route exact path="/homePage/tradeMachine" element={<TradeMachine/>}> 
            </Route>

            <Route exact path="/homePage/pokecard" element={<PokeCards/>}> 
            </Route>
            <Route exact path="/homePage/pokecoins" element={<PokeCoins/>}> 
            </Route>
            <Route exact path="/homePage/battle" element={<Battle/>}> 
            </Route>
            
        </Routes>
    )
}