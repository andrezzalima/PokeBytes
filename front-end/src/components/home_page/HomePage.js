import React, { useState, useRef, useEffect } from 'react';
import "./Icones/tooltip.css";
import "./HomePage.css";
import { Link } from "react-router-dom";

//components
import Dropdown from "./Icones/Dropdown";
import ButtonIcon from "./Icones/ButtonIcon";
//imagens
import battle from "../../icons/battle.png";
import packs from "../../icons/packs-cartas.png";
import pokecoins from "../../icons/pokecoin.png";
import trademachine from "../../icons/trade-machine.png";
import pokebag from "../../icons/pokebag.png";
import VolumeIcon from "../../icons/sound_icon.png";

//musica e efeitos sonoros
import HomepageTheme from "../../sounds/background_music/homepage_theme.mp3";



function HomePage() {

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
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





  return (
    <div className="background">

    
      
      <div className="iconProfile">
        <Dropdown />
      </div>

      <div className='music-section'>

      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className={`volume-icon ${isMusicPlaying ? 'muted' : ''}`}
        onClick={handleMusicToggle}
      />

      <audio ref={audioRef} src={HomepageTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
    </div>

      <div className="iconBattle">
        <div className="tooltip imgBattle">
        <Link to = "/homePage/battle"><ButtonIcon image={battle} tooltip="PackOpening" alt="Packs Icon" /></Link>
          <span className="tooltiptext">Let's Battle!</span>
        </div>
      </div>

      <div className="iconsMeio">
        <div className="tooltip">
          <Link to="/homePage/pokecard">
            <ButtonIcon image={packs} tooltip="PackOpening" alt="Packs Icon" />
          </Link>
          <span className="tooltiptext">Pack Opening</span>
        </div>

        <div className="tooltip">
        <Link to = "/homePage/pokecoins"><ButtonIcon image={pokecoins} tooltip="PokeCoins" alt="Packs Icon" /></Link>
          <span className="tooltiptext">PokéCoins</span>
        </div>
      </div>

      <div className="divCima">
        <div className="tooltip">
          <Link to="/homePage/tradeMachine">
            <ButtonIcon
              image={trademachine}
              tooltip="TradeMachine"
              alt="Packs Icon"
            />
          </Link>
          <span className="tooltiptext">Trading Machine</span>
        </div>

        <div className="tooltip">
          <Link to="/homePage/pokeBag">
            <ButtonIcon image={pokebag} tooltip="PokeBag" alt="Packs Icon" />
          </Link>
          <span className="tooltiptext icon">PokéBag</span>
        </div>


        
      </div>

      </div>

      
  );
}

export default HomePage;
