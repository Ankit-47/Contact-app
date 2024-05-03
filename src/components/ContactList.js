import React from "react";
import ContactCard from "../components/ContactCard";

const ContactList = (props) => {
    // Rendering contact list
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} />
        );
    });

    // Returning the list of contacts wrapped in a <div>
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;
