import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/category/catId'}>Category</NavLink></li>
                <li><NavLink to={'/about/aboutId'}>About</NavLink></li>
                <li><NavLink to={'/contact/contactId'}>Contact</NavLink></li>
                <li><NavLink to={'/search-param'}>Search Param</NavLink></li>
                <li><NavLink to={'/use-navigate'}>Use Navigate</NavLink></li>
            </ul>
        </>
    );
}

export default NavBar;
