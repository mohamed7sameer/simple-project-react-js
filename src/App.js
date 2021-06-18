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
        <Route exact path='/simple-project-react-js/' component={IndexComponent} />
        <Route exact path='/' component={IndexComponent} />
        <Route path='/simple-project-react-js/contact' component={ContactComponent} />
        <FooterComponent />
      </BrowserRouter>
  );
}

export default App;
