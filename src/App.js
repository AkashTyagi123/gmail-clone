import React, { useState } from 'react';

import './App.css';
import AppContent from './components/AppContent/AppContent';
import Header from './components/Header/Header';
import SendingForm from './components/SendingForm/SendingForm';

function App() {
   
const [showForm,setShowForm]= useState(false);
 
  return (
    <div className="app">
     <Header/>
     <AppContent setShowForm={setShowForm}/>

    {showForm&&<SendingForm setShowForm={setShowForm}/>}
    
    
    </div>
  );
}

export default App;
