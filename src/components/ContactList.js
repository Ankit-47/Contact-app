import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import './contactlist.css';
import { useRef } from "react";

const ContactList = (props) => {
    // Rendering contact list
    const inputE1 =useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const getSeachTerm=()=>{
        props.searchKeyword(inputE1.current.value);
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
                        Add Contact
                    </button>
                </Link>
                <div className="ui search-container">
                <div className="ui search">
                 <div className="ui icon input">
                    <input  ref={inputE1} type="text" placeholder="Search Contacts" class="prompt" value={props.term} onChange={getSeachTerm}/>
                    <i className="search icon"></i>
               </div>
               </div>
               </div>   
          </div>
        </div>
    );
};

export default ContactList;
