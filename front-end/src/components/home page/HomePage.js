import "./HomePage.css";

import profile from "../../icons/profile.png";
import battle from "../../icons/battle.png";
import packs from "../../icons/packs-cartas.png";
import pokecoins from "../../icons/pokecoin.png";
import trademachine from "../../icons/trade-machine.png";
import pokebag from "../../icons/pokebag.png";
import ButtonIcon from "./ButtonIcon";

function HomePage(){
    return (
        <div className="background">
            <div className="iconProfile">
              <ButtonIcon image={profile}/>
            </div>
            <div className="iconBattle">
              <ButtonIcon image={battle}/>
            </div>

            <div className="iconsBotton"> 
              <ButtonIcon image={packs}/>
              <ButtonIcon image={pokecoins}/>
              <ButtonIcon image={trademachine}/>
              <ButtonIcon image={pokebag}/>
            </div>
        </div>
        
    )
}

export default HomePage