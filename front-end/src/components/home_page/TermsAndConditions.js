import "./TermsAndConditions.css"
import { Link } from 'react-router-dom';
import returnIcon from "../../icons/return_icon2.png";
import TermsAndConditionsIcon from "../../icons/terms_and_conditions.png";


function TermsAndConditions() {
  return (
    <div className="background-termos">
      <div className="body">

      <img className="terms-and-conditions-icon" src={TermsAndConditionsIcon}></img>

      <h1 className="h1">Terms and Conditions:</h1>
      <hr></hr> <br></br>

      <p className="paragrafo">
        Welcome to PokéBytes! By accessing and using our game, you
        agree to comply with the following terms and conditions: 
        <ol className="listaOrdenada">
        <li className="listaTermos">Objective of the Game: Pokémon Pack Opening is a game where users can purchase
        PokeCoins using real money through MBway, PayPal, and Multibanco. With
        PokeCoins, users can buy packs containing 10 cards or multipacks
        containing 5 packs of 10 cards each. Users can collect their cards and
        battle against the computer. Trading with the computer is also possible,
        where the quality of the trade is influenced by the rarity of the
        Pokémon being traded. Check our <a href="/faq"><b><u>FAQs</u></b></a> page for more information on these topics.</li>
        <br></br>

        <li className="listaTermos">User Responsibilities: You are responsible for
        maintaining the confidentiality of your account information, including
        your username and password. You agree to use the game only for lawful
        purposes and not to engage in any activity that may disrupt or interfere
        with the game's functionality. Personal Information: In order to access
        the game, provide customer support, send updates and relevant
        notifications, personalize the user experience, and improve the game, we
        collect personal information including your username, email address,
        age, and payment information. By using the game, you consent to the
        collection and use of your personal information as described in our
        Privacy Policy.</li>
        <br></br>

        <li className="listaTermos">Intellectual Property: All intellectual property rights
        in the game and its content belong to us or our licensors. You agree not
        to reproduce, distribute, modify, or create derivative works based on
        the game or its content without our prior written consent. </li>
        <br></br>

        <li className="listaTermos">Limitation of Liability: We are not liable for any damages or losses incurred while using the game. We do not guarantee the accuracy, reliability, or
        availability of the game, and we reserve the right to modify or
        discontinue the game at any time without notice. </li>
        <br></br>
        
        <li className="listaTermos">Changes to the Terms and Conditions: We reserve the right to update or modify these terms and conditions at any time. Any changes will be effective immediately upon posting the revised terms and conditions on our website. It is your
        responsibility to review the terms and conditions periodically.</li>
        <br></br>
        
        <li className="listaTermos">Governing Law: These terms and conditions are governed by and construed
        in accordance with the laws of Portugal. </li>
        

        </ol>
        <p>Contact Us: If you have any questions, concerns, or requests regarding these terms and conditions, please contact us at <b>support@pokebytes.com</b>.</p>
        
      </p>
      </div>

      <div className='return-wrapper'>
          <div className='return-to-homepage' >
            <Link to = "/homePage"> <img src={returnIcon} className='return-icon' alt="Return to Homepage" /> </Link> 
          </div>
        </div>
    </div>
  );
}


export default TermsAndConditions
