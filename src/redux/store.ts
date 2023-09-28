import { configureStore } from "@reduxjs/toolkit";
import TimeReducer from './slices/TimerSlice';
export const store = configureStore({
    reducer:{
        time: TimeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;