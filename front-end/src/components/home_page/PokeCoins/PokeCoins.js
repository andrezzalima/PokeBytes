import "./PokeCoins.css";
import {pokecoinBasic} from "../../../icons/pokecoins0.png"
import {pokecoInter} from "../../../icons/pokecoins1.png"
import {pokecoinAvanc} from "../../../icons/pokecoins2.png"

function PokeCoins(props){
    return (
        <div className="background-pokeCoins">
            <div>
                <img src={pokecoinBasic}></img>
            </div>
            <div>
                <img src={pokecoInter}></img>
            </div>
            <div>
                <img src={pokecoInter}></img>
            </div>
        </div>
    )
}

export default PokeCoins