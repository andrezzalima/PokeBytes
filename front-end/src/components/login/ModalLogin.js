import React, { useState } from "react";
import "./ModalLogin.css";
import voltar from "../../icons/return_icon.png"

import { Link } from 'react-router-dom'

function ModalLogin(props) {
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
          {props.name}
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
                  placeholder="USERNAME"
                ></input>
                <input
                  className="inputPassword inputIconPass"
                  type="password"
                  placeholder="PASSWORD"
                ></input>
                
                <div className="voltar-wrapper">
               <div className="voltar-inner"><img className="voltar" src={voltar} onClick={fecharModal}></img></div> 
                </div>
                <Link to="/homePage">
                  <button className="enter">Enter</button>
                </Link>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalLogin;
