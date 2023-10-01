/* Tryb klasyczny to po kolei po wyrazie od 1 do 9 */
import GenerateText from '../GameEngine/GenerateText';
import GenerateGameTextContent from '../GameEngine/GenerateGameTextContent';
import { UpdateWords, ClearWords } from '@/redux/slices/GeneratedWordsSlice';
import { store } from '@/redux/store';

export default async function GenerateClassicMode()
{
  let isReady:boolean = false;
    store.getState();
    store.dispatch(ClearWords())
    let GeneratedWords:string[] = [];
   
    for(let i = 3; i<= 10; i++) {
         GeneratedWords.push(GenerateText({lineAmount: 1, lineLength: i}) as string)
     }
   
  store.dispatch(UpdateWords(GeneratedWords));
  

}