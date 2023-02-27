import React, {useState} from 'react';
import Channel from "../Channel/Channel";

import "./Study.css"
import {Link} from "react-router-dom";
import ButtonCategory from "../../UI/ButtonCategory/ButtonCategory";

const buttons = [
    "Все",
    "Квизы",
    "Курсы"
]

const Study = ({ title, sort }) => {

    const [clickButton, setClickButton] = useState(0)
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
                        {buttons.map((btn, index) =>
                            <ButtonCategory
                                onClick={() => setClickButton(index)}
                                active={clickButton === index ? "active" : ""}>
                                {btn}
                            </ButtonCategory>
                        )}
                    </div>

                    {sortCategory === 0 &&
                        <div className="study__list">

                            <Link to="/quiz" className="study__item">
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
                            </Link>

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

                            <Link to="/quiz" className="study__item">
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
                            </Link>

                        </div>
                    }

                    {sortCategory === 1 &&
                        <div className="study__list">

                            <Link to="/quiz" className="study__item">
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
                            </Link>

                            <Link to="/quiz" className="study__item">
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
                            </Link>

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