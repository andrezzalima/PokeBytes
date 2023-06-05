import { useState } from "react";
import "./PokeCards.css";

function PokeCards(props) {
  const [selectedRarity, setRarity] = useState("silver");
  async function buyPack() {
    console.log("BUYING PACK");
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
        <button onClick={buyPack}>OLA</button>
      </div>
    </div>
  );
}

export default PokeCards;
