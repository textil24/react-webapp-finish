import React, {useState} from 'react';
import "./Quiz.css"
import {Link} from "react-router-dom";
import QuizResult from "../QuizResult/QuizResult";
import CountDownTimer from "../../widgets/CountDownTimer/CountDownTimer";

const card = {
    id: '1d',
    quiz: [
        {
            id: '2z',
            typeStep: "radio",
            question: 'He was elected ___ President many years ago.',
            answers: [
                {
                    id: "1a",
                    answer: 'the'
                },
                {
                    id: "1b",
                    answer: 'a'
                },
                {
                    id: "1c",
                    answer: '-'
                },
                {
                    id: "1d",
                    answer: 'an'
                }
            ],
            corrects: [
                {
                    id: "1a"
                }
            ]
        },
        {
            id: '2v',
            typeStep: "radio",
            question: 'He was elected ___ President many years ago.',
            answers: [
                {
                    id: "2a",
                    answer: 'the'
                },
                {
                    id: "2b",
                    answer: 'a'
                },
                {
                    id: "2c",
                    answer: '-'
                },
                {
                    id: "2d",
                    answer: 'an'
                }
            ],
            corrects: [
                {
                    id: "2a"
                }
            ]
        },
        {
            id: '2n',
            typeStep: "radio",
            question: 'He was elected ___ President many years ago.',
            answers: [
                {
                    id: "3a",
                    answer: 'the'
                },
                {
                    id: "3b",
                    answer: 'a'
                },
                {
                    id: "3c",
                    answer: '-'
                },
                {
                    id: "3d",
                    answer: 'an'
                }
            ],
            corrects: [
                {
                    id: "3a"
                }
            ]
        },
    ]
}

const Quiz = () => {

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [clickAnswer, setClickAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    const [isEndTimer, setIsEndTimer] = useState(false)

    const quizLength = card.quiz.length
    const percentage = step / quizLength * 100

    const stepData = card.quiz[step]

    const onClickVariant = (answerId) => {
        setClickAnswer(answerId)
        setCorrectAnswer(answerId)

        // setTimeout(() => {
        //     console.log('setTimeOut, Отработал!')
        //     setCorrectAnswer(answerId)
        //     setTimeout(() => {
        //         setStep(step + 1)
        //         if (answerId === stepData.corrects[0].id) {
        //             setCorrect(correct + 1)
        //         }
        //     }, 3000)
        // }, 3000)
    }

    const answerClassName = (answerId) => {
        if (clickAnswer === answerId) {
            return "quiz__answer time"
        } else {
            return "quiz__answer"
        }
    }

    const correctClassName = (yourAnswer, correctId) => {
        if (yourAnswer === correctId) {
            return "quiz__answer right"
        } else if (yourAnswer !== correctId) {
            return "quiz__answer wrong"
        }
    }

    const dynamicAnswerClass = (yourAnswer, answerId, correctId) => {
        console.log(correctId)
        if (yourAnswer === correctId && yourAnswer === answerId) {

            if (isEndTimer) {
                return correctClassName(yourAnswer, correctId)
            } else {
                return answerClassName(answerId)
            }

        } else if (yourAnswer !== correctId && yourAnswer === answerId) {
            if (isEndTimer) {
                return correctClassName(answerId)
            } else {
                return answerClassName(answerId)
            }

        }
        return answerClassName(answerId)
    }

    return (
        <div className="quiz">
            <div className="container">

                {step !== quizLength
                    ? (
                        <div className="quiz__inner">

                            <div className="quiz__step">
                                <div className="quiz__step-top">
                                    <Link to="/1" className="quiz__step-title-wrapper">
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
                                    <CountDownTimer
                                        seconds={3}
                                        setIsEndTimer={setIsEndTimer}
                                    />
                                </div>
                            </div>

                            <div className="quiz__content">
                                <div className="quiz__question">
                                    {step + 1} Вопрос
                                </div>
                                <div className="quiz__title">
                                    {stepData.question}
                                </div>
                            </div>

                            <div className="quiz__answers">

                                {stepData.answers.map(obj =>
                                    <div
                                        key={obj.id}
                                        onClick={() => onClickVariant(obj.id)}
                                        className={dynamicAnswerClass(correctAnswer, obj.id, stepData.corrects[0].id)}
                                    >
                                        <div className="quiz__answer-checker"></div>
                                        {obj.answer}
                                    </div>
                                )}

                                {/*{question.variants.map((variant, index) =>*/}
                                {/*    <div*/}
                                {/*        onClick={() => onClickVariant(index)}*/}
                                {/*        className="quiz__answer">*/}
                                {/*        <div className="quiz__answer-checker"></div>*/}
                                {/*        {variant}*/}
                                {/*    </div>*/}
                                {/*)}*/}

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
                        <QuizResult step={step} correct={correct} quizLength={quizLength} />
                    )
                }

            </div>
        </div>
    );
};

export default Quiz;