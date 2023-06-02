import "./login.css";
import pokebytesLogo from "../../images/pokebytes.png";
import { useHistory } from 'react-router-dom'

function Login(props) {

  return (
    <div className="backgound">
      <div className="pokebytes">
        <img className="logo" src={pokebytesLogo} />
      </div>
      <div className="buttons">
        <input
          className="inputUsername"
          type="email"
          placeholder="USERNAME"
        ></input>
        <input
          className="inputPassword"
          type="password"
          placeholder="PASSWORD"
        ></input>
        <button Link to='/homePage' className="buttonLogin">LOGIN</button>
        <button onClick={() => history.push('../')} className="buttonSignUp">SIGN UP</button>
      </div>
    </div>
    
  )}

export default Login;
