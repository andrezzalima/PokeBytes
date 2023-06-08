import React, { useState } from "react";
import "./PokeCards.css";

function PokeCards(props) {

  const [rarity, setRarity] = useState('');
  const [showCardDiv, setShowCardDiv] = useState(false); // Novo estado
  const [cardsData, setCardsData] = useState([]);

  const idUsuario = "647c90dd9ac56ec4413f8f4d";

  async function buyPack() {
    const res = await fetch("/api/purchases/packs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idUsuario,
        packageType: rarity,
      }),
    });
    console.log(idUsuario);
    console.log(res.status);
    
    if (res) {
      const data = await res.json();
      setCardsData(data);
      console.log(cardsData)
    } else {
      console.error("Erro ao fazer a solicitação:", res.status);
    }
    

    // Exibir a div com os 10 cards após a compra
    setShowCardDiv(true);
  }

  const getFormattedRarity = (rarity) => {
    const formattedRarity = rarity.replace('_', ' ');
    const words = formattedRarity.split(' ');
    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || index === words.length - 1) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return capitalizedWords.join(' ');
  };

  function getTypeBackgroundImage(type) {
    const imagePath = '../../../images/pokemon-types-backgrounds/';

    let backgroundImage;

    if (type === 'Normal') {
      backgroundImage = 'Normal.png';
    } else if (type === 'Fire') {
      backgroundImage = 'Fire.png';
    } else if (type === 'Water') {
      backgroundImage = 'Water.png';
    } else if (type === 'Electric') {
      backgroundImage = 'Electric.png';
    } else if (type === 'Grass') {
      backgroundImage = 'Grass.png';
    } else if (type === 'Ice') {
      backgroundImage = 'Ice.png';
    } else if (type === 'Fighting') {
      backgroundImage = 'Fighting.png';
    } else if (type === 'Poison') {
      backgroundImage = 'Poison.png';
    } else if (type === 'Ground') {
      backgroundImage = 'Ground.png';
    } else if (type === 'Flying') {
      backgroundImage = 'Flying.png';
    } else if (type === 'Psychic') {
      backgroundImage = 'Psychic.png';
    } else if (type === 'Bug') {
      backgroundImage = 'Bug.png';
    } else if (type === 'Rock') {
      backgroundImage = 'Rock.png';
    } else if (type === 'Ghost') {
      backgroundImage = 'Ghost.png';
    } else if (type === 'Dragon') {
      backgroundImage = 'Dragon.png';
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  function getTypeBackgroundGradient(type) {
    const imagePath = '../../../images/card-gradients/';

    let backgroundImage;

    if (type === 'Normal') {
      backgroundImage = 'Normal.png';
    } else if (type === 'Fire') {
      backgroundImage = 'Fire.png';
    } else if (type === 'Water') {
      backgroundImage = 'Water.png';
    } else if (type === 'Electric') {
      backgroundImage = 'Electric.png';
    } else if (type === 'Grass') {
      backgroundImage = 'Grass.png';
    } else if (type === 'Ice') {
      backgroundImage = 'Ice.png';
    } else if (type === 'Fighting') {
      backgroundImage = 'Fighting.png';
    } else if (type === 'Poison') {
      backgroundImage = 'Poison.png';
    } else if (type === 'Ground') {
      backgroundImage = 'Ground.png';
    } else if (type === 'Flying') {
      backgroundImage = 'Flying.png';
    } else if (type === 'Psychic') {
      backgroundImage = 'Psychic.png';
    } else if (type === 'Bug') {
      backgroundImage = 'Bug.png';
    } else if (type === 'Rock') {
      backgroundImage = 'Rock.png';
    } else if (type === 'Ghost') {
      backgroundImage = 'Ghost.png';
    } else if (type === 'Dragon') {
      backgroundImage = 'Dragon.png';
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  function getIconTypes(type) {
    const imagePath = '../../../images/pokemon-types/';

    let backgroundImage;

    if (type === 'Normal') {
      backgroundImage = 'Normal.png';
    } else if (type === 'Fire') {
      backgroundImage = 'Fire.png';
    } else if (type === 'Water') {
      backgroundImage = 'Water.png';
    } else if (type === 'Electric') {
      backgroundImage = 'Electric.png';
    } else if (type === 'Grass') {
      backgroundImage = 'Grass.png';
    } else if (type === 'Ice') {
      backgroundImage = 'Ice.png';
    } else if (type === 'Fighting') {
      backgroundImage = 'Fighting.png';
    } else if (type === 'Poison') {
      backgroundImage = 'Poison.png';
    } else if (type === 'Ground') {
      backgroundImage = 'Ground.png';
    } else if (type === 'Flying') {
      backgroundImage = 'Flying.png';
    } else if (type === 'Psychic') {
      backgroundImage = 'Psychic.png';
    } else if (type === 'Bug') {
      backgroundImage = 'Bug.png';
    } else if (type === 'Rock') {
      backgroundImage = 'Rock.png';
    } else if (type === 'Ghost') {
      backgroundImage = 'Ghost.png';
    } else if (type === 'Dragon') {
      backgroundImage = 'Dragon.png';
    } else {
      backgroundImage = null;
    }

    if (backgroundImage) {
      return imagePath + backgroundImage;
    } else {
      return null;
    }
  }

  return (


    <div className="background-pokeCard">
      <div className="poker-card-wrapper">
        <div className="divPacks">
          <p className="pSilver">Silver</p>
          <div
            className="silver"
            onClick={() => {
              setRarity("silver");
              buyPack();
              
            }}
          ></div>
        </div>

        <div className="divPacks">
          <p className="pGold">Gold</p>
          <div
            className="gold"
            onClick={() => {
              setRarity("gold");
              buyPack();
              
            }}
          ></div>
        </div>

        <div className="divPacks">
          <p className="pPlatinum">Platinum</p>
          <div
            className="platinum"
            onClick={() => {
              setRarity("platinum");
              buyPack();
              
            }}
          ></div>
        </div>
      </div>

      {/* Div com os 10 cards */}
        {showCardDiv && (
        <div className="cardDiv">
         {cardsData.length > 0 && cardsData.map((carta, index) => (
          <div className="carta-exterior" key={index} style = {{backgroundImage: `url(${getTypeBackgroundGradient(carta.pokemon.type[0])})`}}>
            <div className="carta-interior">
              <div className="card-upper-info">
                <div className="id-label-hp-type">
                  <div className="id-and-label">
                    <p className="pokemonID"><b>#{carta.pokemon.id}</b></p>
                    <p className="pokemonLabel">{carta.pokemon.label}</p>
                  </div>
                  <div className="hp-and-type">
                    <p className="pokemonHP">{carta.pokemon.base.HP}HP</p>
                    <img className="grassType w-6 h-6"  src={getIconTypes(carta.pokemon.type[0])} ></img>
                  </div>
                </div>

                <div className="image-wrapper">
                  <div className="pokemon-container">
                    <div className="image-inner-wrapper" style = {{backgroundImage: `url(${getTypeBackgroundImage(carta.pokemon.type[0])})`}}>
            
                      <img
                        className="pokemon-field"
                        src={`/images/pokemons/${carta.pokemon.id.toLocaleString(
                          "en-US",
                          { minimumIntegerDigits: 3 }
                        )}.png`}
                        alt={carta.pokemon.label}
                      />
                    </div>
                  </div>
                  <div className="card-lower-info">
                  </div>

                  <div className="info-pokemons">
                  <p className="pokemonRarity">
                    <b>Rarity:</b> <span className="rarity border-dotted border-2">{getFormattedRarity(carta.pokemon.rarity)}</span>
                  </p>
                  <p className="pokemonType">
                    <b>Type:</b> {carta.pokemon.type.join(", ")}</p>
                  <p className="pokemonAttack">
                    <b>Attack:</b> {carta.pokemon.base.Attack}
                  </p>
                  <p className="pokemonDefense">
                    <b>Defense:</b> {carta.pokemon.base.Defense}
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}



        </div>
      )} 
      

 


    </div>

    
  );
}

export default PokeCards;
