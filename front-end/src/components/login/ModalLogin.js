import React, { useState } from "react";
import "./ModalLogin.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function ModalLogin(props) {
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);

  const abrirModal = (props) => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  return (
    <div className="backgroundModal">
      <div>
        <motion.button
          initial={{
            color: "#fff",
            backgroundColor: "#192653",
            rotateY: "0",
          }}
          whileHover={{
            color: "#192653",
            backgroundColor: "#FAFF00",
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
                  placeholder="USERNAME"
                ></input>
                <input
                  className="inputPassword inputIconPass"
                  type="password"
                  placeholder="PASSWORD"
                ></input>

           
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
