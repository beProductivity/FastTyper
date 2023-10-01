import { store } from "@/redux/store";
import GenerateClassicMode from "./game_modes/ClassicMode";
import { GameStop, GameStart } from "@/redux/slices/ModeSlice";
export class myGame {
    GenerateWords = async () => {
        const state = store.getState();
        
        switch (state.GameMode.mode) {
            case 'Classic':
                GenerateClassicMode();
              break;  
        }
    }

    Play = () => {
        store.dispatch(GameStart())
    }
    Stop = () => {
       store.dispatch(GameStop())
    }
}