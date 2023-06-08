import "./PokeCoins.css";
import pokecoinBasic from "../../../icons/pokecoins0.png";
import pokecoInter from "../../../icons/pokecoins1.png";
import pokecoinAvanc from "../../../icons/pokecoins2.png";
import { Link } from "react-router-dom";
import LoginService from "../../service/LoginService";

const idUsuario = "647c90dd9ac56ec4413f8f4d"

function PokeCoins(props) {
    async function buyCoins(ref) {
        
        let coinsAdded;      
        if (ref === 'a') {
          coinsAdded = 300;
        } else if (ref === 'b') {
          coinsAdded = 680;
        } else if (ref === 'c') {
          coinsAdded = 1280;
        }
      
        const res = await fetch("/api/purchase/coins", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: idUsuario,
            coinsAdded: coinsAdded,
          }),
        });
      
        console.log(res.status);
      }
      


  return (


    <div className="background-pokeCoins">

      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Basic<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">5,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoinBasic}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>300 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={() => buyCoins('a')}>Buy</button></Link>
        </div>
      </div>


      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Intermediate<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">11,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoInter}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>680 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={() => buyCoins('b')}>Buy</button></Link>
        </div>
      </div>


      <div class="card-pokecoin">
        <div class="pricing-content">
          <p class="pricing-plan">Advanced<hr></hr></p>
          
          <div
            class="price-value"          >
            <p class="price-number">
              $<span class="price-integer">23,99</span>
            </p>

            <div className="divImagem-pokecoin">
              <img
                className="img-pokecoin"
                src={pokecoinAvanc}
                alt="basic pack"
              ></img>
            </div>
          </div>    
          <p class="pricing-note"><b>1280 PokeCoins</b></p>
          <p class="pricing-note">on first purchase</p>
          <Link to = "/homePage/pokecoins/payment"><button className="buy-pokecoin" onClick={()=>buyCoins('c')}>Buy</button></Link>
        </div>
      </div>
    </div>
  );
}

export default PokeCoins;
