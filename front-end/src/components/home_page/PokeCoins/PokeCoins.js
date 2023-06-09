import React, { useState, useRef, useEffect } from 'react';
import "./PokeCoins.css";
import pokecoinBasic from "../../../icons/pokecoins0.png";
import pokecoInter from "../../../icons/pokecoins1.png";
import pokecoinAvanc from "../../../icons/pokecoins2.png";
import { Link } from "react-router-dom";
import PokeCoinsTheme from "../../../sounds/background_music/pokecoins_theme.mp3"
import VolumeIcon from "../../../icons/sound_icon.png"
import returnIcon from "../../../icons/return_icon2.png";


import LoginService from "../../service/LoginService";

const idUsuario = "647c90dd9ac56ec4413f8f4d"

function PokeCoins(props) {
    

    
       /////////////////////////////////////////////////////////////////////////////

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

       /////////////////////////////////////////////////////////////////////////////
       async function buyCoins(ref) {
        let coinsAdded;      
        if (ref === 'a') {
          coinsAdded = 300;
        } else if (ref === 'b') {
          coinsAdded = 680;
        } else if (ref === 'c') {
          coinsAdded = 1280;
        }
      
        const res = await fetch("/api/purchase/coins", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({

            id: LoginService.getIdUsuario(),

            coinsAdded: coinsAdded,
          }),
        });
      
        console.log(res.status);
      }
      


  return (


    <div className="background-pokeCoins">

      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Basic<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">5,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoinBasic}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>300 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={() => buyCoins('a')}>Buy</button></Link>
        </div>
      </div>


      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Intermediate<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">11,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoInter}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>680 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={() => buyCoins('b')}>Buy</button></Link>
        </div>
      </div>

      
      
      
      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className={`volume-icon ${isMusicPlaying ? 'muted' : ''}`}
        onClick={handleMusicToggle}
      />

      <audio ref={audioRef} src={PokeCoinsTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>


      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Advanced<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">23,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoinAvanc}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>1280 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={()=>buyCoins('c')}>Buy</button></Link>
        </div>
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
  );
}

export default PokeCoins;
