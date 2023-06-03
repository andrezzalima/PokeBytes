import "./login.css";

import login from "../../icons/UserIcon.png";


import { Link } from 'react-router-dom'


function Login(props) {



  return (
    <div className="backgound">

      <div className="buttons">
{/*         <input 
          className="inputUsername"
          type="email"
          placeholder="USERNAME"
        ></input>
        <input
          className="inputPassword"
          type="password"
          placeholder= "PASSWORD" 
        ></input> */}
        <Link to="/homePage"><button className="buttonLogin">LOGIN</button></Link>
        <button className='buttonSignUp'
        >SIGN UP</button>
      </div>
    </div>
    
  )}

export default Login;
