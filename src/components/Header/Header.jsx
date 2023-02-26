import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__burger-wrapper">
                        <div className="header__burger">
                            <span></span>
                        </div>
                    </div>

                    <div className="header__logo">
                        🚀 Domi
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;