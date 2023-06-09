import React, { useState } from 'react';
import './AudioPlayer.css';
import VolumeIcon from '../../icons/sound_icon.png';
import PokebagTheme from '../../sounds/background_music/pokebag_theme.mp3';

const AudioPlayer = ({ audioRef, isMusicPlaying }) => {
  const [isVolumeVisible, setVolumeVisible] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0.5);

  const handleMusicToggle = () => {
    const audio = audioRef.current;

    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleVolumeIconClick = () => {
    setVolumeVisible(!isVolumeVisible);
  };

  const handleVolumeChange = (event) => {
    const newVolumeLevel = parseFloat(event.target.value);
    setVolumeLevel(newVolumeLevel);
    audioRef.current.volume = newVolumeLevel;
  };

  return (
    <div>
      <button className="botao" onClick={handleMusicToggle}>
        {isMusicPlaying ? 'MUSIC OFF' : 'MUSIC ON'}
      </button>

      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className="volume-icon"
        onClick={handleVolumeIconClick}
      />

      {isVolumeVisible && (
        <input
          className="volume-bar"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volumeLevel}
          onChange={handleVolumeChange}
        />
      )}

      <audio ref={audioRef} src={PokebagTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;