import "./HomePage.css"; 
import "./Icones/tooltip.css";
import React from "react";
import { Link } from 'react-router-dom'
//components
import Dropdown from "./Icones/Dropdown";
import ButtonIcon from "./Icones/ButtonIcon";
//imagens
import battle from "../../icons/battle.png";
import packs from "../../icons/packs-cartas.png";
import pokecoins from "../../icons/pokecoin.png";
import trademachine from "../../icons/trade-machine.png";
import pokebag from "../../icons/pokebag.png";

function HomePage() {
  return (
    <div className="background">
      <div className="iconProfile">
        <Dropdown />
      </div>

      
      <div className="iconBattle">
  
  <div className="tooltip imgBattle">
    <ButtonIcon image={battle} tooltip="PackOpening" alt="Packs Icon" />
    <span className="tooltiptext">Let's Battle!</span> 
  </div>

        
        
      </div>



        <div className="iconsMeio">
          <div className="tooltip"> 
            <ButtonIcon image={packs} tooltip="PackOpening" alt="Packs Icon" />
            <span className="tooltiptext">Pack Opening</span> 
          </div>

          <div className="tooltip"> 
            <ButtonIcon image={pokecoins} tooltip="PokeCoins" alt="Packs Icon" />
            <span className="tooltiptext">PokéCoins</span> 
          </div>

        </div>

        <div className="divCima">
          <div className="tooltip"> 
          <Link to="/homePage/tradeMachine"><ButtonIcon image={trademachine} tooltip="TradeMachine" alt="Packs Icon" /></Link>
            <span className="tooltiptext">Trading Machine</span> 
          </div>
        

        <div className="tooltip"> 
          <Link to="/homePage/pokeBag"><ButtonIcon image={pokebag} tooltip="PokeBag" alt="Packs Icon" /></Link>
          <span className="tooltiptext icon">PokéBag</span> 
        </div>
        </div>
      
    </div>
  );
}

export default HomePage;