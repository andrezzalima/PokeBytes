import React, { useState, useRef } from "react";
import "./Battle.css";
import BattleTheme from "../../../sounds/background_music/battle_theme.flac";
import VolumeIcon from "../../../icons/sound_icon.png";
import BattlegroundImage from "../../../images/battleground.png";

function Battle() {
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
    <div>
        <button className="music-toggle" onClick={handleMusicToggle}>
          {isMusicPlaying ? "MUSIC OFF" : "MUSIC ON"}
        </button>

        <img
          src={VolumeIcon}
          alt="Volume Icon"
          className={`volume-icon ${isVolumeBarVisible ? "active" : ""}`}
          onClick={handleVolumeIconClick}
        />

        {isVolumeBarVisible && (
          <input
            className="volume-bar"
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="0.5"
            onChange={handleVolumeChange}
          />
        )}

        <audio
          ref={audioRef}
          src={BattleTheme}
          loop
          style={{ display: "none" }}
        >
          Your browser does not support the audio element.
        </audio>

        <div className="arena-background">
        <img src={BattlegroundImage} />
      </div>
    </div>
  );
}

export default Battle;
