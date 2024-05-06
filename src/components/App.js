import {useState , useEffect, useInsertionEffect} from 'react';
import React from 'react';
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList"
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY="contacts";
  const addContactHandler = (contact)=>{
    console.log(contact);
    setContacts([...contacts,contact] );
  }
  
  useInsertionEffect(() => {
   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)));
   if(retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useInsertionEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);


  return (
  <div className='ui container'>
<Header />
<AddContact addContactHandler={addContactHandler}/>
<ContactList contacts={contacts} />
    </div>
  );
};
export default App;

