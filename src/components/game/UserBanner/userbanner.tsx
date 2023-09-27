import './userbanner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faGear } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';

interface timer {
    minutes: number;
    seconds: number;
    milliseconds: number;
}
interface UserBannerProps {
    timerIsOn:boolean;
}
export default function Userbanner(props:UserBannerProps) {
    const [time, setTime] = useState<timer>({ minutes: 0, seconds: 0, milliseconds: 0 });
    const TimerStatus = props.timerIsOn;
    useEffect(() => {
      if(TimerStatus){
        const interval = setInterval(() => {
          setTime((prevTime) => {
            const newMilliseconds = prevTime.milliseconds + 10;
            const newSeconds = prevTime.seconds + Math.floor(newMilliseconds / 1000);
            const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
    
            return {
              minutes: newMinutes % 60,
              seconds: newSeconds % 60,
              milliseconds: newMilliseconds % 1000,
            };
          });
        }, 10);
    
        return () => clearInterval(interval);
    }
    else {
        return;
    }
      }, [TimerStatus]);
    return(
        <div className='banner'>
            <div className='level'> 
                <CircularProgressbarWithChildren value={66}>
                    <span className='nmbr'> 12 </span> 
                </CircularProgressbarWithChildren>
            </div>
            <div className='time'>
                 <FontAwesomeIcon icon={faStopwatch}/>&nbsp;
                 {time.minutes + ":" + time.seconds + ":" + time.milliseconds}
            </div>
            <div className='account'>
               <img src={'https://kis.agh.edu.pl/wp-content/uploads/2021/01/default-avatar.jpg'}/>    
            </div>
        </div>
    )
}