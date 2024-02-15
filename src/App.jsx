
import { useState } from 'react';
import './App.css';
import Contacts from './components/pages/Contact/contact';
import Header from './components/pages/Header/header';
import MainRoute from './components/routes/routes';


function App() {
  
  return (
    <div className="App tr-02" >
      <Header  />
      <MainRoute />
      <Contacts />
    </div>
  );
}

export default App;



/* 

//=============Routes,Route================

<Routes>
        <Route path="Имя" element={какой элемент}/>
</Routes> 


//================Link================
      <Link to="/Имя">имя элемента/Link>
*/