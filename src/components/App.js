import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { v4 as uuid } from 'uuid';
import api from '../api/contact';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const [contacts, setContacts] = React.useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

//retrieve contacts

const retrieveContacts =async () =>{
  const response = await api.get("/contacts");
  return response.data;
};

  const addContactHandler = async (contact) => {
    const request ={
      id:uuid(),
      ...contact
    }

    const response = await api.post("/contacts",request)
    setContacts([...contacts,  response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  React.useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    // if (retrieveContacts.length > 0) setContacts(retrieveContacts);

    const getAllContacts = async() =>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  React.useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} navigateBack={navigateBack} />}
          />

          <Route path="/contact/:id" Component={ContactDetail} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
