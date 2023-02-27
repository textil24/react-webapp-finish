import React, {useState} from 'react';
import "./Quiz.css"
import {Link} from "react-router-dom";
import QuizResult from "../QuizResult/QuizResult";

const questions = [
    {
        title: "He was elected ___ President many years ago.",
        variants: ["the", "a", "-", "an"],
        correct: 0
    },
    {
        title: "He was elected ___ President many years ago.",
        variants: ["the", "a", "-", "an"],
        correct: 0
    },
    {
        title: "He was elected ___ President many years ago.",
        variants: ["the", "a", "-", "an"],
        correct: 0
    },
]

const Quiz = () => {

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const percentage = step / questions.length * 100

    const question = questions[step]

    const onClickVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="quiz">
            <div className="container">

                {step !== questions.length
                    ? (
                        <div className="quiz__inner">

                            <div className="quiz__step">
                                <div className="quiz__step-top">
                                    <Link to="/quizzes" className="quiz__step-title-wrapper">
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
                                    </Link>
                                    <div className="quiz__step-page">
                                        {step + 1}/3
                                    </div>
                                </div>
                                <div className="quiz__step-bottom">
                                    <span style={{width: `${percentage}%`}}></span>
                                </div>
                            </div>

                            <div className="quiz__time-wrapper">
                                <div className="quiz__time">
                                    31
                                </div>
                            </div>

                            <div className="quiz__content">
                                <div className="quiz__question">
                                    {step + 1} Вопрос
                                </div>
                                <div className="quiz__title">
                                    {question.title}
                                </div>
                            </div>

                            <div className="quiz__answers">

                                {question.variants.map((variant, index) =>
                                    <div
                                        onClick={() => onClickVariant(index)}
                                        className="quiz__answer">
                                        <div className="quiz__answer-checker"></div>
                                        {variant}
                                    </div>
                                )}



                                {/*{true &&*/}
                                {/*    <div className="quiz__answer right">*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">*/}
                                {/*            <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" stroke-width="2"/>*/}
                                {/*            <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" stroke-width="2"/>*/}
                                {/*            <line x1="7.81206" y1="12.7071" x2="1.2 9286" y2="6.1879" stroke="white" stroke-width="2"/>*/}
                                {/*            <line x1="7.81206" y1="12.7071" x2="1.29286" y2="6.1879" stroke="white" stroke-width="2"/>*/}
                                {/*        </svg>*/}
                                {/*        the*/}
                                {/*    </div>*/}
                                {/*}*/}
                                {/*{true &&*/}
                                {/*    <div className="quiz__answer wrong">*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">*/}
                                {/*            <line x1="6.50519" y1="6.50537" x2="19.5156" y2="19.5158" stroke="white" stroke-width="2.16465"/>*/}
                                {/*            <path d="M6.50525 19.5159L19.5157 6.50546" stroke="white" stroke-width="2.16465"/>*/}
                                {/*        </svg>*/}
                                {/*    a*/}
                                {/*    </div>*/}
                                {/*}*/}
                                {/*<div className="quiz__answer">*/}
                                {/*    <div className="quiz__answer-checker"></div>*/}
                                {/*    -*/}
                                {/*</div>*/}
                            </div>

                        </div>
                    )
                    : (
                        <QuizResult step={step} correct={correct} questions={questions} />
                    )
                }

            </div>
        </div>
    );
};

export default Quiz;