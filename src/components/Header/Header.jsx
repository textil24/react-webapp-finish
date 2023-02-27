import React, {useState} from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

const Header = () => {

    const [activeBurger, setActiveBurger] = useState(false)

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

                    <Link
                        to="/domi"
                        onClick={() => setActiveBurger(false)}
                        className="header__logo">
                        🚀 Domi
                    </Link>

                    <div className={activeBurger ? "header__menu active" : "header__menu"}>
                        <Link
                            to="/courses"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            🏆 Курсы
                        </Link>
                        <Link
                            to="/quizzes"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            🧩 Квизы
                        </Link>
                        <Link
                            to="/leaderboards"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            🏆 Лидерборд
                        </Link>
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