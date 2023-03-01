import React, {useEffect, useState} from 'react';
import "./CountDownTimer.css"

const CountDownTimer = ({ seconds, isEndTimer, setIsEndTimer, time, setTime, isRunning }) => {
    useEffect(() => {
        const timer =
            time > 0 && setInterval(() => setTime(time - 1), 1000);
        return () => clearInterval(timer);
    }, [isEndTimer, isRunning, time]);

    const displayTime = () => {
        const seconds = time % 60;
        console.log(seconds)
        // if (!seconds) {
        //     setIsEndTimer(true)
        // }
        return seconds;
    };

    const dynamicDisplayTime = () => {
        if (!displayTime()) {
            setIsEndTimer(true)
            return displayTime()
        }
        return displayTime()
    }

    return <div>{dynamicDisplayTime()}</div>;
};

export default CountDownTimer;

