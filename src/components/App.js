import React from 'react';
import Header from "./Header"
import AddContact from "./AddContact";
import ContactList from "./ContactList"
import './App.css';

function App() {
  const contacts=[
    {
      id:"1",
      name:"Ankit",
      email:"example@gmail.com"
    },
    {
      id:"2",
      name:"Ak",
      email:"demo@gmail.com"
    }
  ];
  return (
  <div className='ui container'>
<Header />
<AddContact />
<ContactList contacts={contacts} />
    </div>
  );
}
export default App;

