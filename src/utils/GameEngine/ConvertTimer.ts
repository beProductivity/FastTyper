import GameTimer from "@/types/game-types/timer-type";


export default function ConvertTimerToMS(timer: GameTimer)
{
     const minutes = timer.minutes * 60000;
     const seconds = timer.seconds * 1000;

     return minutes + seconds + timer.milliseconds;
}