import React from 'react';    
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>        
            <Link to="/">Home   </Link> 
            <Link to="/sobre">Sobre   </Link> 
            <Link to="/contato">Contato   </Link> 
        </div>
    )
}

export default Header;