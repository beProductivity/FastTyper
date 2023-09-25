import './userbanner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faGear } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
export default function Userbanner() {
    return(
        <div className='banner'>
            <div className='level'> 
                <CircularProgressbarWithChildren value={66}>
                    <span className='nmbr'> 12 </span> 
                </CircularProgressbarWithChildren>
            </div>
            <div className='time'>
                 <FontAwesomeIcon icon={faStopwatch}/>&nbsp;
                 0:00
            </div>
            <div className='account'>
               <img src={'https://kis.agh.edu.pl/wp-content/uploads/2021/01/default-avatar.jpg'}/>    
            </div>
        </div>
    )
}