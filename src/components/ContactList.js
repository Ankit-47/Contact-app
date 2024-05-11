import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import './contactlist.css';

const ContactList = (props) => {
    // Rendering contact list
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    // Returning the list of contacts wrapped in a <div>
    return (
        <div className="ui main contact">
            {/* Contact list */}
            <div className="list-container">
                <div className="ui celled list">
                    {props.contacts.map((contact) => (
                        <ContactCard
                            contact={contact}
                            clickHandler={deleteContactHandler}
                            key={contact.id}
                        />
                    ))}
                </div>
            </div>
            
            {/* Button container */}
            <div className="button-container">
                <Link to="/add">
                    <button className="ui button green">
                        Add more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactList;
