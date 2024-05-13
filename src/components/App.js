import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { v4 as uuid } from 'uuid';
import api from '../api/contact';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  const [contacts, setContacts] = React.useState([]);
  const [searchTerm] = useState("");
  const [SearchResults, setSearchResults] = useState([]);

  // retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (updatedContact) => {
    try {
      const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
      const updatedContactData = response.data;

      // Update the contact in the state
      setContacts((prevContacts) => {
        return prevContacts.map((contact) => {
          if (contact.id === updatedContactData.id) {
            return { ...contact, ...updatedContactData };
          }
          return contact;
        });
      });
    } catch (error) {
      console.error("Error updating contact:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const searchHandler = () => {
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) =>
        Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  React.useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  const navigateBack = () => {
    window.location.href = "/";
  };

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
        <Route
  path="/"
  element={<ContactList
    contacts={searchTerm ? SearchResults : contacts}
    getContactId={removeContactHandler}
    term={searchTerm}
    searchKeyword={searchHandler}
  />}
/>

          <Route
            path="/add"
            element={<AddContact
              addContactHandler={addContactHandler}
              navigateBack={navigateBack} />}
          />
          <Route
            path="/edit"
            element={<EditContact updateContactHandler={updateContactHandler}
              navigateBack={navigateBack} />}
          />
          <Route path="/contact/:id" Component={ContactDetail} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
