import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Words, Word } from "@/types/game-types/generated-words-type";



const initialState:Words = {
     words: []
}



export const GeneratedWords = createSlice({
    name: 'GeneratedWords',
    initialState,
    reducers: {
        UpdateWords: (state, action: PayloadAction<any>) => {
            const newWord = action.payload;
            const updatedItems = [...state.words, newWord];
            state.words = updatedItems
            
        }, 
       ClearWords: (state) => {
        state.words = []
       }
    }})

export const { UpdateWords, ClearWords} = GeneratedWords.actions;
export default GeneratedWords.reducer;