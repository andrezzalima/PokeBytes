import React, { useState, useRef, useEffect } from "react";
import "./Battle.css";
import BattleTheme from "../../../sounds/background_music/battle_theme.flac"
import VolumeIcon from "../../../icons/sound_icon.png";
import BattlegroundImage from "../../../images/battleground.png";
import returnIcon from "../../../icons/return_icon2.png"
import { Link } from "react-router-dom";

function Battle() {
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
    <div>
        <img
       src={VolumeIcon}
       alt="Volume Icon"
       className={`volume-icon ${isMusicPlaying ? 'muted' : ''}`}
       onClick={handleMusicToggle}
     />


     <audio ref={audioRef} src={BattleTheme} loop style={{ display: 'none' }}>
       Your browser does not support the audio element.
     </audio>

        <div className="arena-background">
        <img src={BattlegroundImage} />
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

export default Battle;
