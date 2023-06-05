import React, { useState } from 'react';
import ButtonIcon from '../Icones/ButtonIcon';
import './TradeMachine.css';

function TradeMachine(props) {
  const [showRules, setShowRules] = useState(false); // Estado que verifica se as regras devem ser mostradas ou escondidas

  const toggleRules = () => {
    setShowRules(!showRules); // Muda o estado showRules quando a div "rules" é clicada
  };

  return (
    <div>
      <div className="background-tradeMachine">
        <div className="rules" onClick={toggleRules}> 
        <span className='rules-text'>RULES</span>
          
          {showRules && (
            <div className="rules-content-box">
              <p className="rules-content">
                It's time to trade Pokémon cards with the computer, trainer! Prepare for some exciting swaps!
                Remember, you can only trade cards with the computer that share the same rarity. Rarity is like a Pokémon's uniqueness level!
                The available rarities for trading are: very common, common, uncommon, and rare. Let's keep it fair and fun!
                Sorry, legendary trainers! Pokémon cards beyond rare (like very rare, epic, and legendary) are off-limits for trading. They're just too precious!
                Your trusty program buddy will help you find the perfect trading partner based on the rarity you desire. Let the trading adventures begin!
                These rules aim to capture the spirit of Pokémon, creating an engaging and playful atmosphere for card trading while incorporating the concept of rarity in a lighthearted way. Happy trading, Pokémon trainers!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TradeMachine;