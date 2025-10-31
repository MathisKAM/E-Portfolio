import React from 'react';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="header__name">Mathis KAM</div>
            <div className="header__language-toggle">
                <button className="header__language-button">EN</button>
                <button className="header__language-button">FR</button>
            </div>
        </header>
    );
};

export default Header;