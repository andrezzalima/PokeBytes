import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

function PaymentPage() {
  const [formData, setFormData] = useState({
    firstName: "Ruben",
    lastName: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("paymentInfo", JSON.stringify(formData));
  };

  useEffect(() => {
    const storedPaymentInfo = localStorage.getItem("paymentInfo");
    if (storedPaymentInfo) {
      const parsedPaymentInfo = JSON.parse(storedPaymentInfo);
      setFormData(parsedPaymentInfo);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="background-payment">
      <div className="wrapper">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1 className="h1">
              <i className="fas fa-shipping-fast"></i>
              Payment
            </h1>
            <div className="name">
              <div>
                <label htmlFor="f-name">First</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="l-name">Last</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="street">
              <label htmlFor="name">Street</label>
              <input type="text" name="address" />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" />
              </div>
            </div>

            <div className="cc-num">
              <label htmlFor="card-num">Credit Card No.</label>
              <input type="text" name="card-num" />
            </div>
            <div className="cc-info">
              <div>
                <label htmlFor="card-num">Exp</label>
                <input type="text" name="expire" />
              </div>
              <div>
                <label htmlFor="card-num">CCV</label>
                <input type="text" name="security" />
              </div>
            </div>
            <div className="btns">
              <Link to="/homePage/pokecoins/payment/success">
                <button className="button-payment">Purchase</button>
              </Link>
              <Link to="/homePage/pokecoins/">
                <button className="button-payment">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;

