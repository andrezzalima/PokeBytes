//css
import "./HomePage.css";
//componentes
import Dropdown from "./Icones/Dropdown";
import ButtonIcon from "./Icones/ButtonIcon";

//Imagens
import battle from "../../icons/battle.png";
import packs from "../../icons/packs-cartas.png";
import pokecoins from "../../icons/pokecoin.png";
import trademachine from "../../icons/trade-machine.png";
import pokebag from "../../icons/pokebag.png";



function HomePage(){
    return (
        <div className="background">
            <div className="iconProfile">
            <Dropdown />
            </div>
            <div className="iconBattle">
             {/*  <ButtonIcon image={battle}/> */}
              <img className="imgBattle" src={battle}></img>

            </div>

            <div className="iconsBotton"> 
              
              <img className="icons" src={packs}></img>
              <img className="icons" src={pokecoins}></img>
              <img className="icons" src={trademachine}></img>
              <img className="icons" src={pokebag}></img>


{/*               
<ButtonIcon image={packs}/>
<ButtonIcon image={pokecoins}/>
              <ButtonIcon image={trademachine}/>
              <ButtonIcon image={pokebag}/> */}
            </div>
        </div>
        
    )
}

export default HomePage