import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TradeMachine.css";
import returnIcon from "../../../icons/return_icon2.png";
import PokeBag from "../PokeBag/PokeBag";
import TradingMachineTheme from "../../../sounds/background_music/trading_machine_theme.mp3"

/* 
clicar numa div para abrir o inventario do jogador
selecionar uma carta que quero trocar
verificar raridade da carta para a maquina escolher uma carta da mesma raridade
efetivar troca e carta passar pro inventario do jogador e apagar a anterior

 */




function TradeMachine(props) {
  const [showRules, setShowRules] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [opcoesDeTroca, setOpcoesDeTroca] = useState([]);
  const [selectedIdPokemon, setSelectedIdPokemon] = useState(); // Id de controle do input
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioRef = useRef(null);

  const handleMusicToggle = () => {
    const audio = audioRef.current;

    if (!isMusicPlaying) {
      audio.muted = false; 
      audio.play();
    } else {
      audio.muted = true; 
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
  };

  const idUsuario = "647c90dd9ac56ec4413f8f4d";
  
  function abrirInventario(){
    setIsModalOpen(true);
  }

  const handleCardClick = (cardData) => {
    // Aqui você tem acesso ao id do card clicado
    console.log(cardData)
    const rarity = cardData
    return rarity
  
  };

  async function getOpcoes(rarity) {
    const res = await fetch(`/api/user/${idUsuario}/card-trade`);
    const corpo = await res.json();
    let opcoesRaridade = corpo[rarity];
    console.log('huahuahua', opcoesRaridade);
    if (opcoesRaridade) {
      setOpcoesDeTroca(opcoesRaridade);
    }
    console.log("Ocorreu um erro ao atualizar a troca de cartas");
  }

  const handleChange = (event) => {
    let pokemon = inventario.find(
      (carta) => carta.pokemon.id == event.target.value
    );
    if (!pokemon) return;
    const pokemonRarity = pokemon.pokemon.rarity; // busca o objeto pokemon
    setSelectedPokemon(pokemon);
    setSelectedIdPokemon(event.target.value);

    
    getOpcoes();
  };


  const toggleRules = () => {
    setShowRules(!showRules);
  };



  return (
    <div>
      <div className="background-tradeMachine">
        <div className="rules" onClick={toggleRules}>
        
          <span className="rules-text">RULES</span>
        </div>
        {showRules && (
          <div className="rules-content-box bg-white">
            <div className="rules-content">
              <p>
                <span className="rules-title">
                  It's time to trade Pokémon cards, trainer! Prepare for some
                  exciting swaps!
                </span>{" "}
                <br></br>
                <br></br>
                Remember, you can only trade cards that share the same rarity
                type, which is like a Pokémon's uniqueness level! <br></br>
                <br></br>
                The available rarities for trading are:{" "}
                <span className="very-common">very common</span>,{" "}
                <span className="common">common</span>,{" "}
                <span className="uncommon">uncommon</span>, and{" "}
                <span className="rare">rare</span>. Let's keep it fair and fun!{" "}
                <br></br>
                <br></br>
                Sorry, legendary trainers! Pokémon cards beyond rare (like{" "}
                <span className="very-rare">very rare</span>,{" "}
                <span className="epic">epic</span>, and{" "}
                <span className="legendary">legendary</span>) are off-limits for
                trading. They're just too precious! <br></br>
                <br></br>
                Your trusty program buddy will help you find the perfect trading
                partner based on the rarity you desire. Let the trading
                adventures begin! <br></br>
                <br></br>
                These rules aim to capture the spirit of Pokémon, creating an
                engaging and playful atmosphere. <br></br>
                <br></br>
                Happy trading, Pokémon trainers!
              </p>
            </div>

    <button className='music-toggle2' onClick={handleMusicToggle}>
        {isMusicPlaying ? "MUSIC OFF" : "MUSIC ON"}
      </button>

      <input
        className='volume-bar'
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue="1"
        onChange={handleVolumeChange}
      />

      <audio ref={audioRef} src={TradingMachineTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>

          </div>
        )}


 <div className="inventario" onClick={abrirInventario}>
    {isModalOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <PokeBag onCardClick={handleCardClick} />
          {console.log(handleCardClick)}
        </div>
      </div>
    )}

 </div>

        <div className="return-wrapper">
          <div className="return-to-homepage ">
            <Link to="/homePage">
              {" "}
              <img
                src={returnIcon}
                className="return-icon"
                alt="Return to Homepage"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeMachine;
