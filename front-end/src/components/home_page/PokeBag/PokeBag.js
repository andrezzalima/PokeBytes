/* import React from "react";
import "./PokeBag.css";
//import imagem from `../../../images/pokemons/${cartas.pokemon.id}.png`

const PokeBag = () => {
  const cartas = [
    {
      "cartas": [
        {
          "pokemon": {
            "id": 2,
            "name": "ivysaur",
            "label": "Ivysaur",
            "rarity": "very_rare",
            "type": [
              "Grass",
              "Poison"
            ],
            "evolution_id": 3,
            "base": {
              "HP": 60,
              "Attack": 62,
              "Defense": 63,
              "Sp. Attack": 80,
              "Sp. Defense": 80,
              "Speed": 60
            }
          }
        }
      ]
    }
  ];
}




function PokeBag(props) {
  const [carta, setCartas] = useState([cartas]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/user/647de2191f8686ad8f72ea51/pokebag");
        const data = await res.json();
        setCartas(data.cartas);
      } catch (error) {
        console.log("Ocorreu um erro ao obter as cartas:", error);
      }
    }

    fetchData();
  }, []);


 
  return (
    <div className="container">
      {cartas[0].cartas.map((carta, index) => (
        <div className="carta-mochila" key={index}>
          <div className="Carta-interior item">
            <p>{carta.pokemon.label}</p>
            <img
              src={`/images/pokemons/${carta.pokemon.id
                .toLocaleString("en-US", { minimumIntegerDigits: 3 })
              }.png`}
              alt={carta.pokemon.label}
            />
            <p>{carta.pokemon.id}</p>
            <p>{carta.pokemon.base.HP}HP</p>
            <p>Rarity: {carta.pokemon.rarity}</p>
            <p>Type: {carta.pokemon.type.join(", ")}</p>
            <p>Attack: {carta.pokemon.base.Attack}</p>
            <p>Defense: {carta.pokemon.base.Defense}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokeBag; */

import React from "react";
import "./PokeBag.css";
import GrassType from "../../../images/pokemon-types/Grass.png";

const PokeBag = () => {
  const cartas = [
    {
      cartas: [
        {
          pokemon: {
            id: 2,
            name: "ivysaur",
            label: "Ivysaur",
            rarity: "very_rare",
            type: ["Grass", "Poison"],
            evolution_id: 3,
            base: {
              HP: 60,
              Attack: 62,
              Defense: 63,
              "Sp. Attack": 80,
              "Sp. Defense": 80,
              Speed: 60,
            },
          },
        },
      ],
    },
  ];

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

  return (

    <div className="background-pokeBag">
      <div className="container">
        {cartas[0].cartas.map((carta, index) => (
          <div className="carta-exterior" key={index}>
            <div className="Carta-interior">
              <div className="card-upper-info">
                <div className="id-label-hp-type">
                  <div className="id-and-label">
                    <p className="pokemonID"><b>#{carta.pokemon.id}</b></p>
                    <p className="pokemonLabel">{carta.pokemon.label}</p>
                  </div>
                  <div className="hp-and-type">
                    <p className="pokemonHP">{carta.pokemon.base.HP}HP</p>
                    <img className="grassType w-6 h-6" src={GrassType}></img>
                  </div>
                </div>

                <div className="image-wrapper">
                  <div className="pokemon-container">
                    <div className="image-inner-wrapper">
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
        ))}
      </div>
    </div>
  );
};

export default PokeBag;
