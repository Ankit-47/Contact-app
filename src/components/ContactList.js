import React from "react";
import ContactCard from "../components/ContactCard";
import './App.css';

const ContactList = (props) => {
    // Rendering contact list
    const deleteContactHandler = (id) => {
       props.getContactId(id);
    };

    // Handle navigation back to the previous page
    const goBack = () => {
        window.history.back();
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    // Returning the list of contacts wrapped in a <div>
    return (
        <div className="ui main">
            {/* <button className="ui button" onClick={goBack}>
                Go Back
            </button> */}
            
            <div className="ui celled list">
            <button className="ui button green " onClick={goBack}>
                Add more
            </button>
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;
