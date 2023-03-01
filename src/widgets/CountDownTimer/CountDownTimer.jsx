import React, {useEffect, useState} from 'react';
import "./CountDownTimer.css"

const CountDownTimer = ({ seconds, setIsEndTimer }) => {
    const [time, setTime] = useState(seconds);

    useEffect(() => {
        const timer =
            time > 0 && setInterval(() => setTime(time - 1), 1000);
        if (!time) {
            setIsEndTimer(true)
        }
        return () => clearInterval(timer);
    }, [time]);

    const displayTime = () => {
        const seconds = time % 60;
        return `${seconds}`;
    };

    return <div>{displayTime()}</div>;
};

export default CountDownTimer;