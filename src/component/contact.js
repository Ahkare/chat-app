import React, { useState } from "react";
import App from "../App.js";
import "./contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div className="flex">
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
