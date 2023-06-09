import React, { useState, useRef, useEffect } from 'react';
import "./login.css";
import ModalLogin from "./ModalLogin";
import ModalSignUp from "./ModalSignUp";
import OpeningTheme from "../../sounds/background_music/opening_theme.mp3";
import VolumeIcon from "../../icons/sound_icon.png";

function Login(props) {
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
    <div className="background-login">
      
      <div className="buttons">
        <ModalLogin name="LOGIN" />
        <ModalSignUp />
      </div>

      
      <img
        src={VolumeIcon}
        alt="Volume Icon"
        className={`volume-icon ${isMusicPlaying ? 'muted' : ''}`}
        onClick={handleMusicToggle}
      />

      <audio ref={audioRef} src={OpeningTheme} loop style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Login;