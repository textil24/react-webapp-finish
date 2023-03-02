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
        setClickAnswerList
    }) => {
    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
    }, [time]);

    useEffect(() => {
        if (time === 0) {
            setIsEndTimer(true);
            setTimeout(() => {
                setIsEndTimer(false)
                setStep(step + 1)
                setTime(5)
                setClickAnswerItem([])
                setClickAnswerList([])
            }, 2000)
            // setTime(5)
        }
    }, [time, setIsEndTimer]);

    const displayTime = () => {
        const seconds = time % 60;
        return seconds;
    };

    return <div>{displayTime()}</div>;
};

export default CountDownTimer;

