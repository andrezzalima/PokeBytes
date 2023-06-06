import "./FAQ.css";
import { Link } from 'react-router-dom';
import returnIcon from "../../icons/return_icon1.png";

function FAQ() {
  return (
    <div className="background-faqs">
      <div className="body">
        <h1 className="title">Frequently Asked Questions (FAQs)</h1>

        <hr></hr> <br></br>

        <p className="faqs-wrapper">
          <b>1. How many trades can I make per day? </b>
            You can make up to 5 trades per
          day using the trading machine menu. After your trades, you'll need to
          wait 24 hours to make more trades. 
          
          <b>2. Can I battle against the computer with my own deck? </b>
          Yes, you can battle against the computer in
          the Battleground menu using your own deck. Prepare your best Pokémon
          and test your skills! 
          
          <b>3. Where can I check my Pokémon deck? </b>
            You can
          view your Pokémon deck in the PokéBag menu. It will display all the
          Pokémon cards you currently own. 
          
          <b>4. How can I buy Pokémon card packs?</b>
          You can purchase Pokémon card packs using the in-game currency called
          PokéCoins. Go to the Pack Opening menu and choose between single packs
          or multi-packs. 
          
          <b>5. What are the different types of packs available?</b>
          There are three types of packs available: Silver, Golden, and
          Platinum. The Silver pack costs 200 PokéCoins, the Golden pack costs
          500 PokéCoins, and the Platinum pack costs 1000 PokéCoins. 
          
          <b>6. How can I buy PokéCoins? </b>
          You can buy PokéCoins using three different payment
          methods: Multibanco, MBWay, and PayPal. Visit the PokéCoins menu to
          select your preferred payment method. 
          
          <b>7. What are the rarities of Pokémon cards in the packs? </b>
            There are seven rarities of Pokémon cards:
          Very Common, Common, Uncommon, Rare, Very Rare, Epic, and Legendary.
          The probabilities of finding each rarity may vary depending on the
          pack. Here are the probabilities for each pack: Silver Pack: Very
          Common: 40% Common: 30% Uncommon: 20% Rare: 6% Very Rare: 3% Epic:
          0.5% Legendary: 0.2% Golden Pack: Very Common: 32% Common: 25%
          Uncommon: 25% Rare: 10% Very Rare: 5% Epic: 1% Legendary: 0.5%
          Platinum Pack: Very Common: 25% Common: 20% Uncommon: 22% Rare: 15%
          Very Rare: 9% Epic: 2% Legendary: 1.5% 
          
          <b>8. How can I log in and log out of my account? </b>
            You can log in to your account using the login feature
          provided on the website. To log out, simply click on the "Logout"
          button. 
          
          <b>9. Can I edit my profile information? </b>
          Yes, you can edit your profile information. Look for the option to edit your profile details,
          and make the necessary changes. 
          
          <b>10. How can I delete my account?</b> 
          If you wish to delete your account, please contact our support team or
          access the account settings menu for further instructions on how to
          delete your account. 
          
          If you have any other questions or need further
          assistance, please feel free to contact our support team. Happy
          trading and battling!
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

export default FAQ;
