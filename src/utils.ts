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

    /**
     * @description A function that cross converts revenue between string and number
     * @param revenue The revenue to convert
     * @returns Converted revenue
     * @example revenueConverter("Early Revenue") // -1
     * @example revenueConverter(-1) // "Early Revenue"
     * @example revenueConverter("Not Disclosed") // -2
     * @example revenueConverter(-2) // "Not Disclosed"
     * @example revenueConverter(45966) // 45966
     * @example revenueConverter("7285") // 7285
     */
    public revenueConverter(revenue: number| string): string | number {
        if (typeof revenue === 'string') {
            if (revenue = "Early Revenue") {
                return -1;
            }
            if (revenue = "Not Disclosed") {
                return -2;
            }
        }
        if (typeof revenue === 'number' || (typeof revenue === 'string' && !isNaN(Number(revenue)))) {
            if (revenue === -1) {
                return "Early Revenue";
            }
            if (revenue === -2) {
                return "Not Disclosed";
            }
        }
        return revenue;
    }
}


