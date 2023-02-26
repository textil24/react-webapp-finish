import React from 'react';
import "./QuizResult.css"

const QuizResult = () => {
    return (
        <div className="quiz-result">
            <div className="container">
                <div className="quiz-result__inner">

                    <div className="quiz__step">
                        <div className="quiz__step-top">
                            <div className="quiz__step-title-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                >
                                    <polygon points="12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"/>
                                </svg>
                                <div className="quiz__step-title">
                                    🧩 Квизы
                                </div>
                            </div>
                            <div className="quiz__step-page">
                                1/3
                            </div>
                        </div>
                        <div className="quiz__step-bottom">
                            <span></span>
                        </div>
                    </div>

                    <div className="quiz-result__status-wrapper">
                        <div className="quiz-result__status">
                            <div className="quiz-result__status-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                                    <line x1="14.5027" y1="14.498" x2="43.4974" y2="43.4927" stroke="white" stroke-width="4.82408"/>
                                    <path d="M14.5029 43.493L43.4976 14.4984" stroke="white" stroke-width="4.82408"/>
                                </svg>
                            </div>
                            <div className="quiz-result__status-title">
                                Квиз не пройден!
                            </div>
                        </div>
                    </div>

                    <div className="quiz-result__content">

                        <div className="quiz-result__item-top">
                            <div className="quiz-result__item-top-el">
                                <div className="quiz-result__item-top-el-title">
                                    Время:
                                </div>
                                <div className="quiz-result__item-top-el-numbers">
                                    00:15
                                </div>
                            </div>
                            <div className="quiz-result__item-top-el">
                                <div className="quiz-result__item-top-el-title">
                                    Правильных ответов:
                                </div>
                                <div className="quiz-result__item-top-el-numbers">
                                    1
                                </div>
                            </div>
                            <div className="quiz-result__item-top-el">
                                <div className="quiz-result__item-top-el-title">
                                    Неправильных ответов:
                                </div>
                                <div className="quiz-result__item-top-el-numbers">
                                    2
                                </div>
                            </div>
                        </div>

                        <div className="quiz-result__item-bottom">
                            <div className="quiz-result__item-bottom-text">
                                Увы, вы не прошли квиз!
                            </div>
                            <div className="quiz-result__item-bottom-text">
                                Пройдите наш большой курс и научитесь бизнес английскому, чтобы проходить такие тесты без проблем!
                            </div>
                            <div className="quiz-result__item-bottom-adviсe">
                                <div className="quiz-result__item-bottom-el">
                                    ✅ Все уроки внутри Telegram
                                </div>
                                <div className="quiz-result__item-bottom-el">
                                    ✅ Удобное общение через Telegram
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="quiz-result__button">
                        🧩 Перейти на страницу курса
                        <svg
                            style={{transform: "rotate(180deg)"}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#fff"
                            viewBox="0 0 24 24"
                        >
                            <polygon points="12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QuizResult;