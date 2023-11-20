import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my React Website</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    );
};

export default Header;