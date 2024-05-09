
import React from "react";

import './App.css';
import user from "../images/siderman.jpg"

const ContactDetail= (props) => {
   
    return(
     <div className="main" >
        <div className="ui card centered">
            <div className="image">
                <img  src= {user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">ankit</div>
                <div className="description">ok@gmail.com</div>
            </div>
        </div>
     </div>
    );
};

export default ContactDetail;