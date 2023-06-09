


/* 
clicar numa div para abrir o inventario do jogador
selecionar uma carta que quero trocar
verificar raridade da carta para a maquina escolher uma carta da mesma raridade
efetivar troca e carta passar pro inventario do jogador e apagar a anterior

*/



import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TradeMachine.css";
import returnIcon from "../../../icons/return_icon2.png";
import PokeBag from "../PokeBag/PokeBag";
import TradingMachineTheme from "../../../sounds/background_music/trading_machine_theme.mp3";
import VolumeIcon from "../../../icons/sound_icon.png";



function TradeMachine(props) {
  const [showRules, setShowRules] = useState(false);
  const [inventario, setInventario] = useState([]);
  const [opcoesDeTroca, setOpcoesDeTroca] = useState([]);
  const [selectedIdPokemon, setSelectedIdPokemon] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(false);
  const audioRef = useRef(null);

  const handleMusicToggle = () => {
    const audio = audioRef.current;
  
    if (audio) {
      audio.muted = !audio.muted;
      setIsMusicPlaying(!audio.muted);
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        audio.play();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const idUsuario = "647c90dd9ac56ec4413f8f4d";

  function abrirInventario() {
    setIsModalOpen(true);
  }

  const handleCardClick = (cardData) => {
    // Aqui você tem acesso ao id do card clicado
    console.log(cardData);
    const rarity = cardData;
    return rarity;
  };

  async function getOpcoes(rarity) {
    const res = await fetch(`/api/user/${idUsuario}/card-trade`);
    const corpo = await res.json();
    let opcoesRaridade = corpo[rarity];

    console.log("huahuahua", opcoesRaridade);

    if (opcoesRaridade) {
      setOpcoesDeTroca(opcoesRaridade);
    } else {
      console.log("Ocorreu um erro ao atualizar a troca de cartas");
    }
  }

  const handleChange = (event) => {
    let pokemon = inventario.find((carta) => carta.pokemon.id === event.target.value);
    if (!pokemon) return;
    const pokemonRarity = pokemon.pokemon.rarity;
    setSelectedPokemon(pokemon);
    setSelectedIdPokemon(event.target.value);
    getOpcoes(pokemonRarity);
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
        <div className="rules-content-box">
          <div className="rules-content">
            </div>
            <div className="inventario" onClick={abrirInventario}>
              {/* Rest of the inventory content */}
            </div>
          </div>
        )}
      </div>
  
      <div className="bg-image"></div>
      <p>
        <span className="rules-title">
          It's time to trade Pokémon cards, trainer! Prepare for some exciting swaps!
        </span>{" "}
        <br />
        <br />
        Remember, you can only trade cards that share the same rarity type, which is like a Pokémon's uniqueness level! <br />
        <br />
        The available rarities for trading are: <span className="very-common">very common</span>,{" "}
        <span className="common">common</span>, <span className="uncommon">uncommon</span>, and{" "}
        <span className="rare">rare</span>. Let's keep it fair and fun! <br />
        <br />
        Sorry, legendary trainers! Pokémon cards beyond rare (like{" "}
        <span className="very-rare">very rare</span>,{" "}
        <span className="epic">epic</span>, and{" "}
        <span className="legendary">legendary</span>) are off-limits for trading. They're just too precious! <br />
        <br />
        Your trusty program buddy will help you find the perfect trading partner based on the rarity you desire. Let the trading adventures begin! <br />
        <br />
        These rules aim to capture the spirit of Pokémon, creating an engaging and playful atmosphere. <br />
        <br />
        Happy trading, Pokémon trainers!
      </p>
  
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PokeBag onCardClick={handleCardClick} />
            {console.log(handleCardClick)}
          </div>
        </div>
      )}
  
      <div className="return-wrapper">
        <div className="return-to-homepage">
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
  
      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className={`volume-icon ${isMusicPlaying ? 'muted' : ''}`}
        onClick={handleMusicToggle}
      />
  
      <audio ref={audioRef} src={TradingMachineTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
  
      <div className="tm-background">
        <div className="inventario" onClick={abrirInventario}>
          {/* Rest of the inventory content */}
        </div>
  
        <div className="return-wrapper">
          <div className="return-to-homepage">
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

  export  default TradeMachine;