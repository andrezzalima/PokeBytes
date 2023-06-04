import React, { useState } from "react";
import { Link } from 'react-router-dom'

import voltar from "../../icons/return_icon.png"

function ModalSignUp(){
    const [modal, setModal] = useState(false);

    const abrirModal = (props) => {
      setModal(true);
    };
  
    const fecharModal = () => {
      setModal(false);
    };
  
    return (
      <div className="backgroundModal">
        <div>
          <button className="buttonLogin" onClick={abrirModal}>
            SIGN UP
          </button>
        </div>
        <div>
          {modal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={fecharModal}></span>
                <div className="conteudoModal">
                <input
                    className="inputUsername inputIconName"
                    type="email"
                    placeholder="Email"
                  ></input>
                  <input
                    className="inputUsername inputIconName"
                    type="email"
                    placeholder="UserName"
                  ></input>
                <input
                    className="inputUsername inputIconName"
                    type="birthday"
                    placeholder="Birthday"
                  ></input>
                                  <input
                    className="inputUsername inputIconName"
                    type="phone"
                    placeholder="Phone Number"
                  ></input>



                  <input
                    className="inputPassword inputIconPass"
                    type="password"
                    placeholder="PassWord"
                  ></input>
                    <input
                    className="inputPassword inputIconPass"
                    type="password"
                    placeholder="Confirm PassWord"
                  ></input>
                  <img className="voltar" src={voltar} onClick={fecharModal}></img>
                  <Link to="/homePage">
                    <button className="enter">Create</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default ModalSignUp;
