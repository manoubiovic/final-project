import React from "react";
import "../style/contact.css";
import Maps from "./Maps";

const ContactUs = () => {
  return (
    <div className="contact-card">
      <div className="formulaire">
        <h1
          style={{ fontSize: "40px", textShadow: "none", color: "orange" }}
        >
Contact Us        </h1>
        <br />
        <input placeholder="Name *" />
        <br />
        <input placeholder="E.mail *" />
        <br />
        <input placeholder="Location" />
        <br />
        <input placeholder="Phone Number" />
        <br />
        <input style={{ height: "120px" }} placeholder="Message *" />
        <br />
        <button className="submit">Submit</button>
      </div>
        { <div className='left_side'>
              <Maps/>
              </div> }
            </div>
  );
};

export default ContactUs;
