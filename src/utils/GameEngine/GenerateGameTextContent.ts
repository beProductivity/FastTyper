import GameTextContentParams from "@/types/GameTextContentParams"
import GenerateText from "./GenerateText"

class GenerateGameTextContent {
    parameters: GameTextContentParams | null = null

    generate = (parameters: GameTextContentParams): string[] => {


        return GenerateText(parameters)
    }

    constructor(params: GameTextContentParams) {
        this.parameters = params
    }
}