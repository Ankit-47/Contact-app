import React from "react";
import { Link } from "react-router-dom";
import './contactcard.css';
import user from "../images/pexels-beyzaa-yurtkuran-279977530-16614544.jpg"

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className="contact-card">
            <div>
                <img className="ui image avatar" src={user} alt="user" />
                <div className="content">
                    <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
            </div>
            <div className="icon-container">
                <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                    <i className="edit alternate outline icon icon-edit" 
                    onClick={() => props.clickHandler(id)}></i>
                </Link>
                <i className="trash alternate outline icon icon-delete" 
                
                onClick={() => props.clickHandler(id)}></i>
            </div>
        </div>
    );
};

export default ContactCard;
