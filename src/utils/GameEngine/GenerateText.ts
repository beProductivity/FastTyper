import generateArrayWithSum from "./GenerateNumbers";
import GameTextContentParams from "@/types/GameTextContentParams";
import words from '../words/words.json' assert {type: 'json'};

function GenerateText(gameParams: GameTextContentParams){
    const { lineAmount, lineLength } = gameParams;
    let result:string = "";
    const data = words;
 
    for(let i = 0;i < lineAmount; i++) {
        const arrayWithWordsProtothypes: number[] = generateArrayWithSum(lineLength);
        let temporaryLineWord: string = "";

        for(let j = 0; j < lineLength; j++) {
            if(arrayWithWordsProtothypes[j] != 1) {
                let generatedWord: string = "";

                switch(arrayWithWordsProtothypes[j]) {
                    case 3: {
                        const arrLength: number = data.three.length;
                        const randomNumber = Math.floor(Math.random() * arrLength) + 1;

                        generatedWord = data.three[randomNumber];
                        break;
                    }
                    case 4: {
                        const arrLength: number = data.four.length;
                        const randomNumber = Math.floor(Math.random() * arrLength) + 1;

                        generatedWord = data.four[randomNumber];
                        break;
                    }
                    case 5: {
                        const arrLength: number = data.five.length;
                        const randomNumber = Math.floor(Math.random() * arrLength) + 1;

                        generatedWord = data.five[randomNumber];
                        break;
                    }
                    case 6: {
                        const arrLength: number = data.six.length;
                        const randomNumber = Math.floor(Math.random() * arrLength) + 1;

                        generatedWord = data.six[randomNumber];
                        break;
                    }
                    case 7: {
                        const arrLength: number = data.seven.length;
                        const randomNumber = Math.floor(Math.random() * arrLength) + 1;

                        generatedWord = data.seven[randomNumber];
                        break;
                    }
                    default: {
                        generatedWord = "";
                    }
                }

                temporaryLineWord += generatedWord
            }
            else {
                temporaryLineWord += "_"
            }
        }
        result = temporaryLineWord;
    }

    return result; 
}

export default GenerateText;