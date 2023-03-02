import React, {useEffect} from 'react';
import "./CountDownTimer.css"

const CountDownTimer = (
    {
        time,
        setTime,
        setIsEndTimer,
        step,
        setStep,
        initialPlaceAnswerList,
        clickAnswerItem,
        setClickAnswerItem,
        setClickAnswerList,
        isRunning,
        setIsRunning
    }) => {
    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => setTime(time - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    useEffect(() => {
        if (time === 0) {
            setIsEndTimer(true);
            setTimeout(() => {
                setIsEndTimer(false)
                setStep(step + 1)
                setTime(5)
                setClickAnswerItem([])
                setClickAnswerList([])
            }, 1000)
            // setTime(5)
        }
        if (!isRunning) {
            setIsEndTimer(true);
            setTimeout(() => {
                setIsEndTimer(false)
                setStep(step + 1)
                setTime(5)
                setIsRunning(true)
                setClickAnswerItem([])
                setClickAnswerList([])
            }, 1000)
        }
    }, [isRunning, time, setIsEndTimer]);

    const displayTime = () => {
        const seconds = time % 60;
        return seconds;
    };

    return <div>{displayTime()}</div>;
};

export default CountDownTimer;

