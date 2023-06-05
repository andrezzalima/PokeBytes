import { useState } from "react";
import PokeCardBack from "../../card/PokeCardBack";
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
    </div>
  );
}

export default PokeCards;
