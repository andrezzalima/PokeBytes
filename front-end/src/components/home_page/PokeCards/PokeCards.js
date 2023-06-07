import { useState } from "react";
import "./PokeCards.css";

function PokeCards(props) {

  const [selectedRarity, setRarity] = useState("silver");


  async function buyPack(amount) {
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

  function selectRarity(raridade) {
    setRarity(raridade);
  }

  return (
    <div className="background-pokeCard">
      <div className="poker-card-wrapper">
        {selectedRarity === undefined ? (
          <>
            <button className="silver" onClick={() => selectRarity("silver")}>
              Silver
            </button>
            <button className="gold" onClick={() => selectRarity("gold")}>
              Gold
            </button>
            <button
              className="platinum"
              onClick={() => selectRarity("platinum")}
            >
              Platinum
            </button>
          </>
        ) : (
          <>
            <button className="singular" onClick={() => buyPack("singular")}>
              SinglePack
            </button>
            <button className="multi" onClick={() => buyPack("multi")}>
              MultiPack
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [mostrarBotoes, setMostrarBotoes] = useState(true);

  const handleClick = () => {
    setMostrarBotoes(false);
  };

  const handleNovosBotoes = () => {
    // Lógica para exibir os novos botões
    // ...
  };

  return (
    <div>
      {mostrarBotoes ? (
        <div>
          <button onClick={handleClick}>Botão 1</button>
          <button onClick={handleClick}>Botão 2</button>
          <button onClick={handleClick}>Botão 3</button>
        </div>
      ) : (
        <div>
          <button onClick={handleNovosBotoes}>Novo Botão 1</button>
          <button onClick={handleNovosBotoes}>Novo Botão 2</button>
        </div>
      )}
    </div>
  );
}

export default PokeCards;
