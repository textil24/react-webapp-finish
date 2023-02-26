import React from 'react';
import Channel from "../Channel/Channel";

import "./Study.css"

const Study = () => {
    return (
        <div className="study">
            <div className="container">
                <div className="study__inner">

                    <div className="study__title">
                        🧩 Квизы и курсы от
                    </div>

                    <Channel />

                    <div className="study__categories">
                        <div className="study__category active">
                            Все
                        </div>
                        <div className="study__category">
                            Квизы
                        </div>
                        <div className="study__category">
                            Курсы
                        </div>
                    </div>

                    <div className="study__list">

                        <div className="study__item">
                            <div className="study__top">
                                <img className="study__img" src="https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg" alt="image"/>
                                <div className="study__name">
                                    Квиз
                                </div>
                                <div className="study__description">
                                    Тест по английскому языку Present Simple Passive
                                </div>
                            </div>
                            <div className="study__bottom">
                                <div className="study__bottom-exp">
                                    <span className="study__bottom-exp lightblue">+15</span>
                                    XP
                                </div>
                                <div className="study__bottom-questions">
                                    5 вопросов
                                </div>
                            </div>
                        </div>

                        <div className="study__item">
                            <div className="study__top">
                                <img className="study__img" src="https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg" alt="image"/>
                                <div className="study__name">
                                    Квиз
                                </div>
                                <div className="study__description">
                                    Тест по английскому языку Present Simple Passive
                                </div>
                            </div>
                            <div className="study__bottom">
                                <div className="study__bottom-exp">
                                    <span className="study__bottom-exp lightblue">+15</span>
                                    XP
                                </div>
                                <div className="study__bottom-questions">
                                    5 вопросов
                                </div>
                            </div>
                        </div>

                        <div className="study__item">
                            <div className="study__top">
                                <img className="study__img" src="https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg" alt="image"/>
                                <div className="study__name">
                                    Квиз
                                </div>
                                <div className="study__description">
                                    Тест по английскому языку Present Simple Passive
                                </div>
                            </div>
                            <div className="study__bottom">
                                <div className="study__bottom-exp">
                                    <span className="study__bottom-exp lightblue">+15</span>
                                    XP
                                </div>
                                <div className="study__bottom-questions">
                                    5 вопросов
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Study;