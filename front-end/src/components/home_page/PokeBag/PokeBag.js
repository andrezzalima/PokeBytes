import "./PokeBag.css";
import React, { useEffect, useState } from "react";
//import imagem from `../../../images/pokemons/${cartas.pokemon.id}.png`

function PokeBag(props) {
  const [cartas, setCartas] = useState([]);

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
      {cartas.map((carta) => (
          <div className="carta-mochila" key={carta.id}>
       
          <div className="Carta-interior item">
          
            <p>{carta.pokemon.label}</p> 
            <img src={`/images/pokemons/${carta.pokemon.id.toLocaleString('en-US', {minimumIntegerDigits: 3})}.png`} alt={carta.pokemon.label}></img>
            <p>{carta.pokemon.id}</p> 
            <p>{carta.pokemon.base.HP}HP</p>
            <p>Rarity: {carta.pokemon.rarity}</p>
            <p>Type: {carta.pokemon.type}</p>
            <p>Attack: {carta.pokemon.base.Attack}</p>
            <p>Defense: {carta.pokemon.base.Defense}</p>
           
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokeBag;
