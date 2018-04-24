import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import MeuIndex from './Components/meuIndex';
import Header from './Components/Header';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Contato from './Components/Contato';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Header/>
              <Route path='/' component={Home} exact={true} />
              <Route path='/sobre' component={Sobre} />
              <Route path='/contato' component={Contato} />
          </div>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
