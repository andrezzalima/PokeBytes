import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import returnIcon from "../../../icons/return_icon2.png"
import "./PaymentPage.css";


function PaymentPage() {
  const [formData, setFormData] = useState({
    firstName: "Ethan",
    lastName: "Red",
    address: "PokeBytes.Av",
    city: "Two Island",
    state: "Sevii Islands",
    zip: "4567-4456"
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("paymentInfo", JSON.stringify(formData));
    // Add logic to navigate to the next page
    navigate("/homePage/pokecoins/payment/success");
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
      [name]: value
    }));
  };

  const handlePurchaseClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClick = () => {
    // Perform the purchase logic here
    alert("Purchase successful!");
    setShowConfirmation(false);
    // Add logic to navigate to the next page
    navigate("/homePage/pokecoins/payment/success");
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
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
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
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
              <button className="button-payment" onClick={handlePurchaseClick}>
                Purchase
              </button>
              <Link to="/homePage/pokecoins/">
                <button className="button-payment">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to make the purchase?</p>
          <button onClick={handleConfirmClick}>Yes</button>
          <button onClick={handleCancelClick}>No</button>
        </div>
      )}

<div className="return-wrapper">
          <div className="return-to-homepage ">
            <Link to="/homePage">
              {" "}
              <img
                src={returnIcon}
                className="return-icon"
                alt="Return to Homepage"
              />{" "}
            </Link>
          </div>
          </div>
      
    </div>
  );
  }
  
  export default PaymentPage;
