import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameTimer from "@/types/game-types/timer-type";


const initialState:GameTimer ={
    minutes: 0, seconds:0, milliseconds:0
}

export const TimerSlice = createSlice({
    name: 'Accesories', initialState, reducers: {
        SetTimeRecord: (state, action:PayloadAction<GameTimer>)=> {
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
            state.milliseconds = action.payload.milliseconds;

        }
    }
});

export const { SetTimeRecord } = TimerSlice.actions;
export default TimerSlice.reducer;