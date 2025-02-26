import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
    
        const timer = setTimeout(onTimeout, timeout);

       
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
       
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                const newTime = prevTime - 100;
                return newTime <= 0 ? 0 : newTime;
            });
        }, 100);

       
        return () => {
            clearInterval(interval);
        };
    }, [timeout]); 

    
    useEffect(() => {
        setRemainingTime(timeout);
    }, [timeout]);

    return <progress 
    id="question-time" 
    value={remainingTime} 
    max={timeout} 
    className={mode}
    />;
}