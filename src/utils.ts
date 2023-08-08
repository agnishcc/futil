interface IUtils{
    addRandomToWord(word: string, randomWordLength: number): string;
}


export class Utils implements IUtils {
    private generateRandomWord(randomWordLength: number): string {
        return Math.random().toString(36).substring(2, randomWordLength + 2);
    }

    private generateRandomNumber(length:number): number {
        return Math.floor(Math.random() * length);
    }

    /**
     * 
     * @description A function that adds a random string to a word
     * @param word The word to add the random string to
     * @param randomWordLength The length of the random string to add
     * @returns Word with random string appended 
     * @example addRandomToWord('hello', 5) // hello-5fj3d
     */
    public addRandomToWord(word: string, randomWordLength: number): string {
       const randomWord = this.generateRandomWord(randomWordLength);
       return `${word}-${randomWord}`
    }

    
}


