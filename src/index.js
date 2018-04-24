
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

/*
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
    <div>        
        <Link to="/">Home   </Link> 
        <Link to="/sobre">Sobre   </Link> 
        <Link to="/contato">Contato   </Link> 
    </div>
)

const Home = () => (
    <div>
        <Header/>
        <div>
            Pagina Home
        </div>
    </div>
)

const Sobre = () => (
    <div>
        <Header/>
        <p>pagina sobre</p>
    </div>
)

const Contato = () => (
    <div>
        <Header/>
        <p>pagina contato</p>
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={Home} exact={true} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/contato' component={Contato} />
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
*/