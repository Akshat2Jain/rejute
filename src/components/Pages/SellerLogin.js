import React from "react";
import "./SellerLogin.css";

const SellerLogin = () => {
  return (
    <div className="container">
      <div className="fullscreen-container">
        <div className="sign-up-container">
          <h1 className="signup-header">Resell Form</h1>
          {/* <p className="signup-text">It's Free and Only Take a Minute!</p> */}
          <form className="form">
            <div className="input-container">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" />
            </div>

            <div className="input-container">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-container">
              <label for="first-name">Product Type</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="input-container">
              <label for="first-name">Buying Place</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="input-container">
              <label for="first-name">Month To Buy</label>
              <input
                type="Date"
                id="first-name"
                name="first-name"
                className="date"
              />
            </div>

            <div className="input-container">
              <label for="first-name">Pick Up Location</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="input-container">
              <label for="first-name">Product Description</label>
              <textarea rows="5" className="descp"></textarea>
            </div>
            <button>Resell It</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
