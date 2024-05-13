import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import './contactlist.css';

const ContactList = (props) => {
    const inputRef = useRef(null);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const handleSearch = () => {
        props.searchKeyword(inputRef.current.value);
    };

    const renderContactlist = props.contacts.map((contact) => (
        <ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
        />
    ));

    return (
        <div className="ui main contact">
            <div className="list-container">
                <div className="ui celled list">
                    {renderContactlist.length > 0 ? renderContactlist : "No Contacts available"}
                </div>
            </div>
          
            <div className="button-container">
                <Link to="/add">
                    <button className="ui button green">
                        Add Contact
                    </button>
                </Link>
                <div className="ui search-container">
                    <div className="ui search">
                        <div className="ui icon input">
                            <input 
                                ref={inputRef} 
                                type="text" 
                                placeholder="Search Contacts" 
                                className="prompt" 
                                value={props.term} 
                                onChange={handleSearch} 
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactList;
