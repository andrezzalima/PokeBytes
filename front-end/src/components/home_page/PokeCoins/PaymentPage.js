import { Link } from "react-router-dom";
import "./PaymentPage.css"

function PaymentPage() {
  return (
    <div className="background-payment">
      <div class="wrapper">
        <div class="container">
          <form action="">
            <h1 className="h1">
              <i class="fas fa-shipping-fast"></i>
              Payment
            </h1>
            <div class="name">
              <div>
                <label for="f-name">First</label>
                <input type="text" name="f-name" />
              </div>
              <div>
                <label for="l-name">Last</label>
                <input type="text" name="l-name" />
              </div>
            </div>
            <div class="street">
              <label for="name">Street</label>
              <input type="text" name="address" />
            </div>
            <div class="address-info">
              <div>
                <label for="city">City</label>
                <input type="text" name="city" />
              </div>
              <div>
                <label for="state">State</label>
                <input type="text" name="state" />
              </div>
              <div>
                <label for="zip">Zip</label>
                <input type="text" name="zip" />
              </div>
            </div>

            <div class="cc-num">
              <label for="card-num">Credit Card No.</label>
              <input type="text" name="card-num" />
            </div>
            <div class="cc-info">
              <div>
                <label for="card-num">Exp</label>
                <input type="text" name="expire" />
              </div>
              <div>
                <label for="card-num">CCV</label>
                <input type="text" name="security" />
              </div>
            </div>
            <div class="btns">
              <Link to="/homePage/pokecoins/payment/sucess"><button className="button-payment">Purchase</button></Link>
              <Link to="/homePage/pokecoins/"><button className="button-payment">Cancel</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
