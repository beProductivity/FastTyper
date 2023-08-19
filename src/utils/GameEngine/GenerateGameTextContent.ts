import GameTextContentParams from "@/types/GameTextContentParams"
import GenerateText from "./GenerateText"

class GenerateGameTextContent {
    parameters: GameTextContentParams | null = null

    generate = async (): Promise<string[]> => {
        return await GenerateText(this.parameters as GameTextContentParams);
    }

    constructor(params: GameTextContentParams) {
        this.parameters = params
    }
}

export default GenerateGameTextContent