import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TradeMachine.css';
import returnIcon from "../../../icons/return_icon1.png";
import pokeballBackground from "../../../icons/pokeball_background.png";

function TradeMachine(props) {
  const [showRules, setShowRules] = useState(false);


  const toggleRules = () => {
    setShowRules(!showRules);
  };





  return (
    <div>
      <div className="background-tradeMachine">
        <div className="rules" onClick={toggleRules}>
          <span className='rules-text' >RULES</span>
        </div>
        {showRules && (
         <div className='rules-content-box bg-white'>
            
            <div className="rules-content">
              <p><span className='rules-title'>It's time to trade Pokémon cards, trainer! Prepare for some exciting swaps!</span> <br></br><br></br>

                Remember, you can only trade cards that share the same rarity type, which is like a Pokémon's uniqueness level! <br></br><br></br>

                The available rarities for trading are: <span className='very-common'>very common</span>, <span className='common'>common</span>, <span className='uncommon'>uncommon</span>, and <span className='rare'>rare</span>. Let's keep it fair and fun! <br></br><br></br>

                Sorry, legendary trainers! Pokémon cards beyond rare (like <span className='very-rare'>very rare</span>, <span className='epic'>epic</span>, and <span className='legendary'>legendary</span>) are off-limits for trading. They're just too precious! <br></br><br></br>

                Your trusty program buddy will help you find the perfect trading partner based on the rarity you desire. Let the trading adventures begin! <br></br><br></br>

                These rules aim to capture the spirit of Pokémon, creating an engaging and playful atmosphere. <br></br><br></br>

                Happy trading, Pokémon trainers!
              </p>
              
            </div>
          </div>
        )}

        <div className='return-wrapper'>
          <div className='return-to-homepage' >
            <Link to = "/homePage"> <img src={returnIcon} className='return-icon' alt="Return to Homepage" /> </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeMachine;