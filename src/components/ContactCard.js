import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import user from "../images/pexels-beyzaa-yurtkuran-279977530-16614544.jpg"

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui image avatar" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}>
            </i>
        </div>
    );
};

export default ContactCard;
