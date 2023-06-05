import "./login.css";
import ModalLogin from "./ModalLogin"
import ModalSignUp from "./ModalSignUp";






function Login(props) {



  return (
    <div className="backgound">

      <div className="buttons">
        <ModalLogin name="LOGIN"/>
        <ModalSignUp/>
      </div>
    </div>
    
  )}

export default Login;
