import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameMode } from "@/types/game-types/game-mode";


const initialState:GameMode ={
    mode: "Classic",
    GameIsStarted: false
}

export const GameModeSlice = createSlice({
    name: 'GameMode', initialState, reducers: {
        SetMode: (state, action:PayloadAction<GameMode>)=> {
          state.mode = action.payload.mode 
      },
      GameStart: (state) => {
        state.GameIsStarted = true;
      },

      GameStop: (state) => {
        state.GameIsStarted = false
      }
    }
});

export const { SetMode, GameStart, GameStop } = GameModeSlice.actions;
export default GameModeSlice.reducer;