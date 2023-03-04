import React, {useState} from 'react';
import "./Header.css"
import {Link} from "react-router-dom";

import logo from "../../assets/logo.png"
import cup from  "../../assets/сup.webp"
import puzzle from  "../../assets/puzzle.png"
import user from "../../assets/user.png"

const Header = () => {

    const [activeBurger, setActiveBurger] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    {/* Burger */}
                    <div className="header__burger-wrapper">
                        <div
                            onClick={() => setActiveBurger(!activeBurger)}
                            className={activeBurger ? "header__burger active" : "header__burger"}>
                            <span></span>
                        </div>
                    </div>
                    {/* End Burger */}

                    {/* Logo */}
                    <div
                        onClick={() => setActiveBurger(false)}
                        className="header__logo">
                        <img className="header__img" src={logo} alt="logo"/>
                        Domi
                    </div>
                    {/* End Logo */}

                    {/* Burger Menu */}
                    <div className={activeBurger ? "header__menu active" : "header__menu"}>
                        <Link
                            to="/2"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            <img
                                className="header__menu-item-img"
                                src={cup}
                                alt="cup"
                            />
                            Курсы
                        </Link>
                        <Link
                            to="/1"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            <img
                                className="header__menu-item-img"
                                src={puzzle}
                                alt="puzzle"
                            />
                            Квизы
                        </Link>
                        <Link
                            to="/leaderboards"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            <img
                                className="header__menu-item-img"
                                src={cup}
                                alt="cup"
                            />
                            Лидерборд
                        </Link>
                        <Link
                            to="/profile"
                            onClick={() => setActiveBurger(false)}
                            className="header__menu-item">
                            <img
                                className="header__menu-item-img"
                                src={user}
                                alt="user"
                            />
                            Профиль | 100 XP️
                        </Link>
                    </div>
                    {/* End Burger Menu */}

                </div>
            </div>
        </header>
    );
};

export default Header;