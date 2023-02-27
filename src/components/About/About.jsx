import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__inner">

                    <div className="about__title">
                        🚀 Domi – платформа для интерактивного взаимодействия
                    </div>

                    <div className="about__user">
                        <div className="about__user-name">
                            👤 @ilyachapyshev
                        </div>
                        <div className="about__user-exp">
                            <span className="lightblue">
                                99
                            </span> XP | <span className="lightblue">
                                99
                            </span>⚡️
                        </div>
                        <div className="about__user-desc">
                            Приглашай друзей и получай <span className="lightblue">+100</span> XP за каждого нового пользователя!
                        </div>
                    </div>

                    <div className="about__ref">
                        Твоя реферальная ссылка:
                        <a href="https://t.me/domi_bot?ref=123124" className="about__ref-link">
                            https://t.me/domi_bot?ref=123124
                        </a>
                    </div>

                    <div className="about__prices">
                        <div className="about__prices-title">
                            Купить XP и ⚡
                        </div>
                        <div className="about__row-wrapper">
                            <div className="about__row">
                                <div className="about__price-title">
                                    XP:
                                </div>
                                <div className="about__price-list">
                                    <div className="about__price-item">
                                        100 XP/ 100 руб.
                                    </div>
                                    <div className="about__price-item">
                                        200 XP/ 200 руб.
                                    </div>
                                </div>
                            </div>
                            <div className="about__row">
                                <div className="about__price-title">
                                    ⚡:
                                </div>
                                <div className="about__price-list">
                                    <div className="about__price-item">
                                        200 ⚡/ 100 руб.
                                    </div>
                                    <div className="about__price-item">
                                        300 ⚡/ 200 руб.
                                    </div>
                                </div>
                            </div>
                            <div className="about__prices-desc">
                                P.S. Покупая XP и ⚡, вы напрямую поддерживаете создателя канала, которому посвящен этот
                                раздел! 💙
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;