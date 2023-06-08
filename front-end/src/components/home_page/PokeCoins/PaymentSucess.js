import "./PaymentSucess.css";
import voltar from "../../../icons/return_icon1.png";
import { Link } from "react-router-dom";

function PaymentSucess() {
  return (
    <div className="backgroud-payment-sucess">
      <p className="paragrafo-payment-sucess">
        Your Purchase has been successfully completed!
      </p>
      <Link to="/homePage/">
        <img className="imagemVoltar" src={voltar}></img>
        
      </Link>
    </div>
  );
}

export default PaymentSucess;
