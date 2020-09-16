import React from 'react'
import {NavLink} from 'react-router-dom';

export const Nav = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>ΑΡΧΙΚΗ ΟΘΟΝΗ</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/add'>ΠΡΟΣΘΗΚΗ ΑΤΟΜΟΥ</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/list'>ΛΙΣΤΑ ΑΤΟΜΩΝ</NavLink></li>
        </ul>
    </nav>
);

export default Nav;