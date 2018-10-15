import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <nav className ="topnav">
            <NavLink exact to='/Home'  className ="nav-link" activeClassName="active"> Home</NavLink>
            <NavLink exact to='/Registration' className ="nav-link" activeClassName="active"> Registration</NavLink>
            <NavLink exact to='/Contact' className = "nav-link" activeClassName="active">Contact</NavLink>
        </nav>
       </header>
    );
};

export default Header;