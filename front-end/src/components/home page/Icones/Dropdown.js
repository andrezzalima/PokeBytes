import React, { useState } from 'react';
import ButtonIcon from './ButtonIcon';
import { Link } from 'react-router-dom'

import profile from "../../icons/profile.png";
import "../Icones/dropdown.css";



const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <ButtonIcon onClick={openDropdown} image={profile} />

      {open && (
        <ul className="dropdown-menu">
          <li>Perfil</li>
          <li>Termos e Condições</li>
          <li>Política de Privacidade</li>
          <Link to="/" className='link'><li>Logout</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
