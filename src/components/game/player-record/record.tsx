import './record.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import GameTimer from '@/types/game-types/timer-type';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import ConvertTimerToMS from '@/utils/GameEngine/ConvertTimer';

interface precord {
  trigger: boolean;
}
export default function PlayerRecord(props: precord)
{
  const [TimeRecord, setTimeRecord] = useState<GameTimer>({minutes: 0, seconds: 0, milliseconds: 0});
  const time = useSelector((state:RootState) => state.time);

  useEffect(()=> {
    /* tu będzie skrypt na załadowanie rekordu w tym trybie z bazy danych */
  }, []);

  useEffect(()=> {
    let ActualTimeRecord = ConvertTimerToMS(TimeRecord);
    let newTime = ConvertTimerToMS(time);
    if(ActualTimeRecord === 0){
      setTimeRecord(time)

    }
    else if(newTime < ActualTimeRecord)
    {
      setTimeRecord(time)
    } else return;
  }, [props.trigger]);
    return(
    <div>
      <div className='record-panel'>
        <div className='trophy'><FontAwesomeIcon icon={faTrophy}/><p className='time_record'> {TimeRecord.minutes + ":" + TimeRecord.seconds + ":" + TimeRecord.milliseconds }</p></div>
      </div>
    </div>
    )
}