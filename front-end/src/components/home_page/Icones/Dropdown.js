import React, { useState } from 'react';
import { Link } from 'react-router-dom'
//componentes
import ButtonIcon from '../Icones/ButtonIcon';
//imagem
import profile from "../../../icons/profile.png";
//css
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
          <Link to="/profile" className='link'><li className='firstChild'>Profile</li></Link>
          <Link to="/terms-and-conditions" className='link'><li>Terms and conditions</li></Link>
          <Link to="/privacy-policy" className='link'><li>Privacy Policy</li></Link>
          <Link to="/faq" className='link'><li className='link'>FAQs</li></Link>
          <Link to="/" className='link'><li className='lastChild'>Logout</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
