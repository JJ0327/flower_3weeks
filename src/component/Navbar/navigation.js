import React from 'react';
import logo from '../../img/TeamLogo.png'; 
import './navigation.css';

const NavBar = () => {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <a href="/">
                    <img className="header-logo" src={logo} alt="logo"/>
                    </a>
                </div>
                <div className="header-right">
                    <a href="/flowermap" className="header-a">MyFlower</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;