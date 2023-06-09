import "./PaymentSuccess.css";
import voltar from "../../../icons/return_icon1.png";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="backgroud-payment-success">
      <p className="paragrafo-payment-success">
        Your Purchase has been successfully completed!
      </p>
      <Link to="/homePage/">
        <img className="imagemVoltar" src={voltar}></img>
        
      </Link>
    </div>
  );
}

export default PaymentSuccess;
