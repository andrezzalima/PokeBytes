import React, { useState, useRef } from 'react';
import "./login.css";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
import OpeningTheme from "../../sounds/background_music/opening_theme.mp3";

function Login(props) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
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

  return (
    <div className="background">
      <div></div>

      <div className="buttons">
        <ModalLogin name="LOGIN" />
        <ModalSignUp />
      </div>

      <button className='music-toggle' onClick={handleMusicToggle}>
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

      <audio ref={audioRef} src={OpeningTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Login;