import React, { useState, useRef } from 'react';
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
  const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(false);
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

  const handleVolumeIconClick = () => {
    setIsVolumeBarVisible(!isVolumeBarVisible);
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
  };





  return (
    <div className="background">
      <div className="iconProfile">
        <Dropdown />
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

      <div className='music-section'>
      <button className='music-toggle' onClick={handleMusicToggle}>
        {isMusicPlaying ? "MUSIC OFF" : "MUSIC ON"}
      </button>
      
      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className={`volume-icon ${isVolumeBarVisible ? 'active' : ''}`}
        onClick={handleVolumeIconClick}
      />

      {isVolumeBarVisible && (
        <input
          className='volume-bar'
          type="range"
          min="0"
          max="1"
          step="0.1"
          defaultValue="0.5"
          onChange={handleVolumeChange}
        />
      )}

      <audio ref={audioRef} src={HomepageTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
      </div>
    </div>
  );
}

export default HomePage;
