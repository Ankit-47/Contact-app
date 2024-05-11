import React from "react";

import './contactdetails.css';
import user from "../images/siderman.jpg"
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  // Check if props.location and props.location.state exist before accessing them
  const { name, email } = props.location?.state?.contact ?? {};
   
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="ui image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/"><button className="ui button green centre">Back to Contact List
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
