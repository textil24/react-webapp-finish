import React, {useState} from 'react';
import "./Header.css"

const Header = () => {

    const [activeBurger, setActiveBurger] = useState(true)

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__burger-wrapper">
                        <div
                            onClick={() => setActiveBurger(!activeBurger)}
                            className={activeBurger ? "header__burger active" : "header__burger"}>
                            <span></span>
                        </div>
                    </div>

                    <div className="header__logo">
                        🚀 Domi
                    </div>

                    <div className={activeBurger ? "header__menu active" : "header__menu"}>
                        <div className="header__menu-item">
                            🏆 Курсы
                        </div>
                        <div className="header__menu-item">
                            🧩 Квизы
                        </div>
                        <div className="header__menu-item">
                            🏆 Лидерборд
                        </div>
                        <div className="header__menu-item">
                            👤 Профиль | 100 XP️
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;