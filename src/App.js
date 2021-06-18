import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';

import NavbarComponent from './Components/NavbarComponent';
import ContactComponent from './Components/ContactComponent';
import IndexComponent from './Components/IndexComponent';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import FooterComponent from './Components/FooterComponent' ;


function App() {
  return (
    
      
      <BrowserRouter>
        <NavbarComponent />
        <Route exact path='/' component={IndexComponent} />
        <Route path='/contact' component={ContactComponent} />
        <FooterComponent />
      </BrowserRouter>
      
    
  );
}

export default App;
