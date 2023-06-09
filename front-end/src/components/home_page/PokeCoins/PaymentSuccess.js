import "./PaymentSuccess.css";
import returnIcon from "../../../icons/return_icon2.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import soundEffect from "../../../sounds/background_music/payment_success.mp3";

function PaymentSuccess() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playSoundEffect = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    const timeoutId = setTimeout(playSoundEffect, 500); // Delay of 500 milliseconds (0.5 seconds)

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0.5 * window.innerHeight) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="backgroud-payment-success">
      <p className="paragrafo-payment-success">
        Your purchase has been successfully completed!
      </p>
      <Link to="/homePage/">
        <img className="imagemVoltar" src={returnIcon} alt="Return Icon" />
      </Link>
      <audio ref={audioRef} src={soundEffect} />
    </div>
  );
}

export default PaymentSuccess;