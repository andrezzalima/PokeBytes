import React, { useState } from 'react';
//css
import "./profile.css"

//imagem
import imagem from "../../images/background.png"

function Profile(){
    const [userName, setUserName] = useState('Andrezza');
    const [email, setEmail] = useState('andrezza@andrezza.com');
    const [phoneNumber, setPhoneNumber] = useState('912345678');
    const [dateBirth, setDateBirth] = useState('13/09/1991');
    
    const [address, setAddress] = useState('Rua do bytes, 4');
    const [city, setCity] = useState('Portugal');
    const [upload, setUpload] = useState(false);
    const [photo, setPhoto] = useState({imagem});
    const [editMode, setEditMode] = useState(false);
  
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
      }
      
      const handlePhoto = (e) => {
        const file = e.target.files[0];
        setPhoto(URL.createObjectURL(file));
      }

  
    const toggleEditMode = () => {
      setEditMode(!editMode);
    };
  
    return (
      <div className="profile">
        <div className='campoImg'>
        <img className="foto" src={photo}  />

        {upload ? (
      <div>
        <input type="file" onChange={handlePhoto} />
      </div>
    ) : (
        <button className='buttonProfile' onClick={handleButtonClick}>Edit Photo</button>
    )}
  
 
        </div>
       
        <div className="informacaoPerfil">
          <div className="divInfo">
            <label >Username:</label>
            {editMode ? (
              <input type="text" id="userName" value={userName} onChange={handleNameChange} />
            ) : (
              <span>{userName}</span>
            )}
          </div>

          <div className="divInfo">
            <label >Email:</label>
            {editMode ? (
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            ) : (
              <span>{email}</span>
            )}
          </div>

          <div className="divInfo">
            <label >Phone number:</label>
            {editMode ? (
              <input type="phone" id="phone" value={phoneNumber} onChange={handlePhoneChange} />
            ) : (
              <span>{phoneNumber}</span>
            )}
          </div>

          <div className="divInfo">
            <label >Date of Birth:</label>
            {editMode ? (
              <input type="date" id="date" value={dateBirth} onChange={handleBirthChange} />
            ) : (
              <span>{dateBirth}</span>
            )}
          </div>

          <div className="divInfo">
            <label >Address:</label>
            {editMode ? (
              <input type="text" id="address" value={address} onChange={handleAddressChange} />
            ) : (
              <span>{address}</span>
            )}
          </div>

          <div className="divInfo">
            <label >Location:</label>
            {editMode ? (
              <input type="text" id="city" value={city} onChange={handleCityChange} />
            ) : (
              <span>{city}</span>
            )}
          </div> 

                    {editMode ? (
            <>
              <button className='buttonProfile' onClick={toggleEditMode}>Save</button>
              <button className='buttonProfile' onClick={toggleEditMode}>Cancel</button>
            </>
          ) : (<>
            <button className='buttonProfile' onClick={toggleEditMode}>Edit Profile</button>
            <button className='buttonProfile'>Change Password</button>
            </>
          )}   
        </div>
        </div>

         
      
    );
  };
export default Profile;