import React, {useEffect, useMemo, useState} from 'react';
import "./Quiz.css"
import {Link} from "react-router-dom";
import QuizResult from "../QuizResult/QuizResult";
import CountDownTimer from "../../widgets/CountDownTimer/CountDownTimer";

const card = {
    id: '1d',
    quiz: [
        {
            id: '2y',
            typeStep: "checkbox",
            question: 'He was elected ___ President many years ago.',
            answers: [ 'the', 'a', '-', 'an' ],
            corrects: [0, 1, '', '']
        },
        {
            id: '2x',
            typeStep: "radio",
            question: 'He was elected ___ President many years ago.',
            answers: [ 'the', 'a', '-', 'an' ],
            corrects: [0]
        },
        {
            id: '2y',
            typeStep: "checkbox",
            question: 'He was elected ___ President many years ago.',
            answers: [ 'the', 'a', '-', 'an' ],
            corrects: [0, 1, '', '']
        },
        {
            id: '2x',
            typeStep: "radio",
            question: 'He was elected ___ President many years ago.',
            answers: [ 'the', 'a', '-', 'an' ],
            corrects: [0]
        }
    ]
}


const Quiz = () => {

    // Переход карточки и корректность ответа
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    // Один ответ
    const [clickAnswerItem, setClickAnswerItem] = useState([null])

    // Более одного ответа
    const [clickAnswerList, setClickAnswerList] = useState([])
    const [initialPlaceAnswerList, setInitialPlaceAnswerList] = useState([])

    // Настройки таймера
    const [time, setTime] = useState(5);

    const [isEndTimer, setIsEndTimer] = useState(false)

    const quizLength = card.quiz.length
    const percentage = step / quizLength * 100

    const stepData = card.quiz[step]

    // ANSWER ITEM

    const onClickAnswerItem = (index) => {
        setClickAnswerItem([index])
        if (index === clickAnswerItem[0]) {
            setCorrect(correct + 1)
        }
    }

    const styleAnswerItem = (index, correct) => {
        if (clickAnswerItem[0] === index) {
            if (isEndTimer) {
                if (clickAnswerItem[0] === correct) {
                    return "quiz__answer right"
                }
                return "quiz__answer wrong"
            }
            return "quiz__answer time"
        }
        return "quiz__answer"
    }

    const IconAnswerItem = ({index, correctAnswer}) => {
        if (isEndTimer) {
            if (clickAnswerItem[0] === index && clickAnswerItem[0] === correctAnswer) {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.2 9286" y2="6.1879" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.29286" y2="6.1879" stroke="white" strokeWidth="2"/>
                    </svg>
                )
            } else if (clickAnswerItem[0] === index && clickAnswerItem[0] !== correctAnswer) {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <line x1="6.50519" y1="6.50537" x2="19.5156" y2="19.5158" stroke="white" strokeWidth="2.16465"/>
                        <path d="M6.50525 19.5159L19.5157 6.50546" stroke="white" strokeWidth="2.16465"/>
                    </svg>
                )
            }
        }

        return <div className="quiz__answer-checker"></div>
    }

    // END ANSWER ITEM

    // ANSWER LIST

    useEffect(() => {
        if (stepData && stepData.corrects && stepData.corrects.length > 1) {
            const nullAnswerList = stepData.corrects.map(() => null);
            setClickAnswerList(nullAnswerList);
            setInitialPlaceAnswerList(nullAnswerList);
        }
    }, [stepData]);

    const onClickAnswerList = (index) => {
        if (clickAnswerList[index] === null) {
            setClickAnswerList(
                [
                    ...clickAnswerList.slice(0, index),
                    index,
                    ...clickAnswerList.slice(index + 1)
                ]
            )
        } else {
            setClickAnswerList(
                [
                    ...clickAnswerList.slice(0, index),
                    null,
                    ...clickAnswerList.slice(index + 1)
                ]
            )
        }
    }

    const styleAnswerList = (index, correct) => {

        if (clickAnswerList[index] === index) {
            if (isEndTimer) {
                if (clickAnswerList[index] === correct) {
                    return "quiz__answer right"
                }
                return "quiz__answer wrong"
            }
            return "quiz__answer time"
        }
        return "quiz__answer"
    }

    const IconAnswerList = ({ index, correctAnswer }) => {
        if (isEndTimer) {
            if (clickAnswerList[index] === index && clickAnswerList[index] === correctAnswer) {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.2 9286" y2="6.1879" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.29286" y2="6.1879" stroke="white" strokeWidth="2"/>
                    </svg>
                )
            } else if (clickAnswerList[index] === index && clickAnswerList[index] !== correctAnswer) {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <line x1="6.50519" y1="6.50537" x2="19.5156" y2="19.5158" stroke="white" strokeWidth="2.16465"/>
                        <path d="M6.50525 19.5159L19.5157 6.50546" stroke="white" strokeWidth="2.16465"/>
                    </svg>
                )
            }
        }

        if (clickAnswerList[index] === index) {
            return (
                <div className="quiz__answer-checker checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 14" fill="none">
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.2 9286" y2="6.1879" stroke="white" strokeWidth="2"/>
                        <line x1="7.81206" y1="12.7071" x2="1.29286" y2="6.1879" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            )
        }

        return <div className="quiz__answer-checker checkbox"></div>

    }

    // END ANSWER LIST

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
                                        {step + 1}/{quizLength}
                                    </div>
                                </div>
                                <div className="quiz__step-bottom">
                                    <span style={{width: `${percentage}%`}}></span>
                                </div>
                            </div>

                            <div className="quiz__time-wrapper">
                                <div className="quiz__time">
                                    <CountDownTimer
                                        time={time}
                                        setTime={setTime}
                                        setIsEndTimer={setIsEndTimer}
                                        step={step}
                                        setStep={setStep}
                                        initialPlaceAnswerList={initialPlaceAnswerList}
                                        clickAnswerItem={clickAnswerItem}
                                        setClickAnswerItem={setClickAnswerItem}
                                        setClickAnswerList={setClickAnswerList}
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

                                {stepData.answers.map((answer, index) =>
                                    <button disabled={isEndTimer} key={index}
                                        onClick={() => {stepData.typeStep === "radio"
                                                    ? onClickAnswerItem(index)
                                                    : onClickAnswerList(index)
                                                }
                                            }
                                        className={stepData.typeStep === "radio"
                                                ? styleAnswerItem(index, stepData.corrects[index])
                                                : styleAnswerList(index, stepData.corrects[index])
                                            }>
                                        {stepData.typeStep === "radio"
                                            ? <IconAnswerItem index={index} correctAnswer={stepData.corrects[0]}/>
                                            : <IconAnswerList index={index} correctAnswer={stepData.corrects[index]}/>
                                        }
                                        {answer}
                                    </button>
                                )}

                            </div>

                        </div>
                    )
                    : (
                        <QuizResult
                            step={step}
                            correct={correct}
                            quizLength={quizLength}
                        />
                    )
                }

            </div>
        </div>
    );
};

export default Quiz;



// const [step, setStep] = useState(0)
// const [correct, setCorrect] = useState(0)
// const [clickAnswer, setClickAnswer] = useState(null)
// const [correctAnswer, setCorrectAnswer] = useState(null)
//
// // Timer
// const [time, setTime] = useState(5);
// const [isRunning, setIsRunning] = useState(true)
// const [isEndTimer, setIsEndTimer] = useState(false)
//
// const quizLength = card.quiz.length
// const percentage = step / quizLength * 100
//
// const stepData = card.quiz[step]
//
// const handleResetTimer = () => {
//     setIsRunning(false)
//     setTimeout(() => {
//         setIsRunning(true)
//         setTime(5)
//     }, 0)
// }
//
// const onClickVariant = (answerId) => {
//     console.log(isEndTimer)
//     if (!isEndTimer) {
//         setClickAnswer(answerId)
//         setCorrectAnswer(answerId)
//     }
// }
//
// const answerClassName = (answerId) => {
//     if (clickAnswer === answerId) {
//         return "quiz__answer time"
//     } else {
//         return "quiz__answer"
//     }
// }
//
// const correctClassName = (yourAnswer, correctId) => {
//     if (yourAnswer === correctId) {
//         return "quiz__answer right"
//     } else if (yourAnswer !== correctId) {
//         return "quiz__answer wrong"
//     }
// }
//
// const dynamicAnswerClass = (yourAnswer, answerId, correctId) => {
//     if (yourAnswer === correctId && yourAnswer === answerId) {
//         if (isEndTimer) {
//             console.log('-_- ===')
//             setStep(step + 1)
//             // handleResetTimer()
//             // setIsEndTimer(false)
//             return correctClassName(yourAnswer, correctId)
//         }
//     } else if (yourAnswer !== correctId && yourAnswer === answerId) {
//         if (isEndTimer) {
//             console.log('-_- !==')
//             setStep(step + 1)
//             // handleResetTimer()
//             // setIsEndTimer(false)
//             return correctClassName(yourAnswer, correctId)
//         }
//     }
//     return answerClassName(answerId)
// }
//
// const ResultIcon = ({yourAnswer, answerId, correctId}) => {
//     if (yourAnswer === correctId && yourAnswer === answerId) {
//         if (isEndTimer) {
//             return (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
//                     <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
//                     <line x1="7.81206" y1="11.2929" x2="17.8121" y2="1.29289" stroke="white" strokeWidth="2"/>
//                     <line x1="7.81206" y1="12.7071" x2="1.2 9286" y2="6.1879" stroke="white" strokeWidth="2"/>
//                     <line x1="7.81206" y1="12.7071" x2="1.29286" y2="6.1879" stroke="white" strokeWidth="2"/>
//                 </svg>
//             )
//         }
//     }
//     if (yourAnswer !== correctId && yourAnswer === answerId) {
//         if (isEndTimer) {
//             return (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
//                     <line x1="6.50519" y1="6.50537" x2="19.5156" y2="19.5158" stroke="white" strokeWidth="2.16465"/>
//                     <path d="M6.50525 19.5159L19.5157 6.50546" stroke="white" strokeWidth="2.16465"/>
//                 </svg>
//             )
//         }
//     }
//
//     return <div className="quiz__answer-checker"></div>
//
// }
//
// if (isEndTimer) {
//     console.log('step')
//     setStep(step + 1)
//     setIsEndTimer(false)
//     handleResetTimer()
//     setTimeout(() => {
//         setIsEndTimer(false)
//         handleResetTimer()
//         setTimeout(() => {
//             setClickAnswer(null)
//             setCorrectAnswer(null)
//         }, 1000)
//     }, 3000)
// }
