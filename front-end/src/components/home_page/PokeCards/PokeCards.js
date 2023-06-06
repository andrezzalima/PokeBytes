import { useState } from "react";
import PokeCardBack from "../../card/PokeCardBack";


import returnIcon from "../../../icons/return_icon1.png"





import { Link } from 'react-router-dom';

import "./PokeCards.css";

function PokeCards(props) {
  
  const [selectedRarity, setRarity] = useState("silver");
  async function buyPack() {
     const res = await fetch("/api/purchases/packs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        packageType: selectedRarity,
      }),
    });

    console.log(res.status);
  }

  return (
    <div className="background-pokeCard">
      <div className="poker-card-wrapper">
        <PokeCardBack className="pokecard-back" onClick={buyPack}/>
        <PokeCardBack className="pokecard-back" onClick={buyPack}/>
        <PokeCardBack className="pokecard-back" onClick={buyPack}/>
      </div>

      <div className='return-wrapper'>
          <div className='return-to-homepage' >
            <Link to = "/homePage"> <img src={returnIcon} className='return-icon' alt="Return to Homepage" /> </Link> 
          </div>
        </div>
    </div>
  );
}

export default PokeCards;
