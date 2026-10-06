import { useState, useEffect } from "react"
import './stopwatch.css'

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const timer = setInterval(()=>{
            setSeconds(prevSeconds => {
                if(prevSeconds === 59){
                    setMinutes(prevMinutes => {
                        if(prevMinutes === 59){
                            setHours(prevHours => prevHours + 1);
                            return 0;
                        }
                        return prevMinutes + 1;
                    });
                    return 0;
                }
                return prevSeconds + 1;
            });

        },1000);

        return () => clearInterval(timer);
    }, [isRunning]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);



  return (
    <div className="stopwatch">
        <div>
            <h1>
                {hours} : {minutes} : {seconds}
            </h1>
            <button className="stopwatch-btn" onClick={startTimer}>start</button>
        </div>
        <div>
            {hours} : {minutes} : {seconds}
            <button className="stopwatch-btn" onClick={stopTimer}>stop</button>
        </div>
    </div>
  )
}

export default Stopwatch
