import { configureStore } from "@reduxjs/toolkit";
import TimeReducer from './slices/TimerSlice';
import GameModeReducer from './slices/ModeSlice';
import WordsReducer from './slices/GeneratedWordsSlice';
export const store = configureStore({
    reducer:{
        time: TimeReducer,
        GameMode: GameModeReducer,
        Words: WordsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;