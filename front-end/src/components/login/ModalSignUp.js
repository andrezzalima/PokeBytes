import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



function ModalSignUp() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    birthday: "",
    phoneNumber: "",
    password: "",
  });

  function handleEvent(e, param) {
    setUser((prevState) => ({ ...prevState, [param]: e.target.value }));
  }

  const sendData = async (info) => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    console.log(await data);
    return await data;
  };

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
          }} className="buttonLogin" onClick={abrirModal}>
          SIGN UP
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
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => handleEvent(e, "email")}
                ></input>
                <input
                  className="inputUsername inputIconName"
                  type="username"
                  placeholder="UserName"
                  value={user.username}
                  onChange={(e) => handleEvent(e, "username")}
                ></input>
                <input
                  className="inputUsername inputIconName"
                  type="birthday"
                  placeholder="Birthday"
                  value={user.birthday}
                  onChange={(e) => handleEvent(e, "birthday")}
                ></input>
                <input
                  className="inputUsername inputIconName"
                  type="phone"
                  placeholder="Phone Number"
                  value={user.phoneNumber}
                  onChange={(e) => handleEvent(e, "phoneNumber")}
                ></input>

                <input
                  className="inputPassword inputIconPass"
                  type="password"
                  placeholder="PassWord"
                  value={user.password}
                  onChange={(e) => handleEvent(e, "password")}
                ></input>
                <input
                  className="inputPassword inputIconPass"
                  type="password"
                  placeholder="Confirm PassWord"
                ></input>
    
                <Link to="/homePage">
                  <button className="enter" onClick={() => sendData(user)}>
                    Create
                  </button>
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
