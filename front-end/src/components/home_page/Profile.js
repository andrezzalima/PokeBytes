import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./profile.css";
import imagem from "../../images/background.png";
import returnIcon from "../../icons/return_icon1.png";
import LoginService from '../service/LoginService';

function Profile() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [dateBirth, setDateBirth] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [upload, setUpload] = useState(false);
  const [photo, setPhoto] = useState(imagem);
  const [editMode, setEditMode] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/user/" + LoginService.getIdUsuario());
        const data = await res.json();
        console.log(data)
        if(data){
          setUserName(data.username)
          setEmail(data.email)
          setPhoneNumber(data.phoneNumber)
          setDateBirth(data.birthday)
          setAddress(data.address)
          setCity(data.city)
        }
      } catch (error) {
        console.log("Ocorreu um erro ao obter as cartas:", error);
      }
    }


    fetchData();
  }, []);

  

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleBirthChange = (e) => {
    setDateBirth(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleButtonClick = () => {
    setUpload(true);
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleSaveButtonClick = () => {
    const profileData = {
      username: userName,
      email: email,
      phoneNumber: phoneNumber,
      birthday: dateBirth, 
      city : city,
      address: address
      // Adicione aqui outras propriedades que deseja enviar para o servidor
    };
  
    fetch("/api/profile/edit/" + LoginService.getIdUsuario(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then(response => response.json())
      .then(data => {
        // Se a resposta do servidor for bem-sucedida, você pode tratar a resposta aqui
        console.log(data);
      })
      .catch(error => {
        // Se ocorrer um erro na comunicação com o servidor, você pode tratar o erro aqui
        console.error('Erro:', error);
      });
  
    setEditMode(false);
  };

  const handleCancelButtonClick = () => {
    setEditMode(false);
    // Aqui você pode redefinir os valores para os valores originais
    // ou buscá-los novamente de algum lugar, como um servidor.
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="profile">
      <div className="campoImg">
        <img className="foto" src={photo} alt="Profile Photo" />
        {upload ? (
          <div>
            <input type="file" onChange={handlePhoto} />
          </div>
        ) : (
          <button className="buttonProfile" onClick={handleButtonClick}>
            Edit Photo
          </button>
        )}
      </div>

      <div className="informacaoPerfil">
        <div className="divInfo">
          <label>Username:</label>
          {editMode ? (
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleNameChange}
            />
          ) : (
            <span>{userName}</span>
          )}
        </div>

        <div className="divInfo">
          <label>Email:</label>
          {editMode ? (
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          ) : (
            <span>{email}</span>
          )}
        </div>

        <div className="divInfo">
          <label>Phone number:</label>
          {editMode ? (
            <input
              type="phone"
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          ) : (
            <span>{phoneNumber}</span>
          )}
        </div>

        <div className="divInfo">
          <label>Date of Birth:</label>
          {editMode ? (
            <input
              type="date"
              id="date"
              value={dateBirth}
              onChange={handleBirthChange}
            />
          ) : (
            <span>{dateBirth}</span>
          )}
        </div>

        <div className="divInfo">
          <label>Address:</label>
          {editMode ? (
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>

        <div className="divInfo">
          <label>Location:</label>
          {editMode ? (
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
            />
          ) : (
            <span>{city}</span>
          )}
        </div>

        {editMode ? (
          <>
            <button className="buttonProfile" onClick={handleSaveButtonClick}>
              Save
            </button>
            <button
              className="buttonProfile"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="buttonProfile" onClick={toggleEditMode}>
              Edit Profile
            </button>
            <button className="buttonProfile">Change Password</button>
          </>
        )}
      </div>

      <div className="return-wrapper">
        <div className="return-to-homepage">
          <Link to="/homePage">
            <img src={returnIcon} className="return-icon" alt="Return to Homepage" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
