import React, { useState } from "react";
import "./ModalLogin.css";
import voltar2 from "../../icons/return_icon.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import LoginService from "../service/LoginService";


import { Link } from "react-router-dom";

function ModalLogin(props) {
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const abrirModal = (props) => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  /* const login = async () => {
    let success = await LoginService.login(username, password)
 /*    if(success){
      navigate('/homePage?id=' + idRecebido)

    } */
  



  return (
    <div className="backgroundModal">
      <div>
        <motion.button
          initial={{
            color: "#FFCB05",
            backgroundColor: "#192653",
            rotateY: "0",
            fontFamily: "PokemonRBYG",
            fontWeight: "bold",
            
            
          }}
          whileHover={{
            color: "#192653",
            backgroundColor: "#FFCB05",
            rotateY: "180",
            
          }}
          className="buttonLogin"
          onClick={abrirModal}
        >
          {props.name}
        </motion.button>
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
                  placeholder="Username"
                  onChange={setUsername} value={username}
                ></input>
                <input
                  className="inputPassword inputIconPass"
                  type="password"
                  placeholder="Password"
                  onChange={setPassword} value={password}
                ></input>

                <div className="voltar2-wrapper">
                  <div className="voltar2-inner">
                    <img
                      className="voltar2"
                      src={voltar2}
                      onClick={fecharModal}
                    ></img>
                  </div>
                </div>
                <Link>
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