import React, {useState} from 'react';
import Channel from "../Channel/Channel";

import "./Study.css"
import {Link} from "react-router-dom";

const Study = ({ title, sort }) => {
    console.log(sort)

    const [sortCategory, setSortCategory] = useState(sort)

    return (
        <div className="study">
            <div className="container">
                <div className="study__inner">

                    <div className="study__title">
                        🧩 {title}
                    </div>

                    <Channel remove={'remove'} />

                    <div className="study__categories">
                        <div
                            onClick={() => setSortCategory(0)}
                            className={sortCategory === 0 ? "study__category active" : "study__category"}>
                            Все
                        </div>
                        <div
                            onClick={() => setSortCategory(1)}
                            className={sortCategory === 1 ? "study__category active" : "study__category"}>
                            Квизы
                        </div>
                        <div
                            onClick={() => setSortCategory(2)}
                            className={sortCategory === 2 ? "study__category active" : "study__category"}>
                            Курсы
                        </div>
                    </div>

                    {sortCategory === 0 &&
                        <div className="study__list">

                            <div className="study__item">
                                <div className="study__top">
                                    <img className="study__img" src="https://3.assets.klops.ru/media/W1siZiIsIjIwMTlcLzA1XC8xM1wvNmpidG0zbHdkcV9maWxlLnBuZyJdLFsicCIsInRodW1iIiwiMTA1M3g1OTIrMCsxMCJdLFsicCIsInRodW1iIiwiODYweDQ4NCMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSAtc3RyaXAgLWludGVybGFjZSBQbGFuZSJdXQ==?sha=c23081c0da29cfa9" alt="image"/>
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

                            <Link to="/course" className="study__item">
                                <div className="study__top">
                                    <img className="study__img" src="https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg" alt="image"/>
                                    <div className="study__name">
                                        Курс
                                    </div>
                                    <div className="study__description">
                                        Тест по английскому языку Present Simple Passive
                                    </div>
                                </div>
                                <div className="study__bottom">
                                    <div className="study__bottom-exp">
                                        <span className="study__bottom-exp lightblue">+1500</span>
                                        XP
                                    </div>
                                    <div className="study__bottom-questions">
                                        399 $
                                    </div>
                                </div>
                            </Link>

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
                    }

                    {sortCategory === 1 &&
                        <div className="study__list">

                            <div className="study__item">
                                <div className="study__top">
                                    <img className="study__img" src="https://3.assets.klops.ru/media/W1siZiIsIjIwMTlcLzA1XC8xM1wvNmpidG0zbHdkcV9maWxlLnBuZyJdLFsicCIsInRodW1iIiwiMTA1M3g1OTIrMCsxMCJdLFsicCIsInRodW1iIiwiODYweDQ4NCMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSAtc3RyaXAgLWludGVybGFjZSBQbGFuZSJdXQ==?sha=c23081c0da29cfa9" alt="image"/>
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
                    }

                    {sortCategory === 2 &&
                        <div className="study__list">

                            <Link to="/course" className="study__item">
                                <div className="study__top">
                                    <img className="study__img" src="https://oinfo.ru/img/2018/12/Il-ja-Varlamov.jpg" alt="image"/>
                                    <div className="study__name">
                                        Курс
                                    </div>
                                    <div className="study__description">
                                        Тест по английскому языку Present Simple Passive
                                    </div>
                                </div>
                                <div className="study__bottom">
                                    <div className="study__bottom-exp">
                                        <span className="study__bottom-exp lightblue">+1500</span>
                                        XP
                                    </div>
                                    <div className="study__bottom-questions">
                                        399 $
                                    </div>
                                </div>
                            </Link>

                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Study;