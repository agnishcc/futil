import { enumCase } from "./types";

interface IStrings {
    capitalize(word: string): string;
    pascalCase(word: string[]): string;
    camelCase(word: string[]): string;
    kebabCase(word: string[]): string;
    snakeCase(word: string[]): string;
    dotCase(word: string[]): string;
    camelCaseToPascalCase(word: string): string;
    pascalCaseToCamelCase(word: string): string;
    caseIdentifier(word: string): enumCase;
}

export class Strings implements IStrings {

    /**
     * @description A function that capitalizes the first letter of a word 
     * @param word The word to capitalize
     * @returns The capitalized word
     * @example capitalize('hello') // Hello
     */
    capitalize(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    /**
     * @description A function that converts a list of words to a pascal case word
     * @param word The list of words to convert
     * @returns The pascal case word
     * @example pascalCase(['hello', 'world']) // HelloWorld
     */
    pascalCase(word: string[]): string {
        return word.map((word) => this.capitalize(word)).join('');
    }

    /**
     * @description A function that converts a list of words to a camel case word
     * @param word The list of words to convert
     * @returns The camel case word
     * @example camelCase(['hello', 'world']) // helloWorld
     * @example camelCase(['Hello', 'World']) // helloWorld
     * @example camelCase(['Hello', 'world']) // helloWorld
     */
    camelCase(word: string[]): string {
        const pascalCase = this.pascalCase(word);
        return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
    }

    /**
     * @description A function that converts a list of words to a kebab case word
     * @param word The list of words to convert
     * @returns The kebab case word
     * @example kebabCase(['hello', 'world']) // hello-world
     * @example kebabCase(['Hello', 'World']) // hello-world
     * @example kebabCase(['Hello', 'world']) // hello-world
     * @example kebabCase(['hello', 'World']) // hello-world
     */
    kebabCase(word: string[]): string {
        return word.join('-');
    }

    /**
     * @description A function that converts a list of words to a snake case word
     * @param word The list of words to convert
     * @returns The snake case word
     * @example snakeCase(['hello', 'world']) // hello_world
     * @example snakeCase(['Hello', 'World']) // hello_world
     * @example snakeCase(['Hello', 'world']) // hello_world
     */
    snakeCase(word: string[]): string {
        return word.join('_');
    }

    /**
     * @description A function that converts a list of words to a dot case word
     * @param word The list of words to convert
     * @returns The dot case word
     * @example dotCase(['hello', 'world']) // hello.world
     * @example dotCase(['Hello', 'World']) // hello.world
     * @example dotCase(['Hello', 'world']) // hello.world
     * @example dotCase(['hello', 'World']) // hello.world
     */
    dotCase(word: string[]): string {
        return word.join('.');
    }

    /**
     * @description A function that converts a camel case to pascal case
     * @param word The word to convert
     * @returns The case word
     * @example camelCaseToPascalCase('helloWorld') // HelloWorld
     */
    camelCaseToPascalCase(word: string): string {
        return this.pascalCase(word.split(/(?=[A-Z])/));
    }

    /**
     * @description A function that converts a pascal case to camel case
     * @param word The word to convert
     * @returns The case word
     * @example pascalCaseToCamelCase('HelloWorld') // helloWorld
     */
    pascalCaseToCamelCase(word: string): string {
        return this.camelCase(word.split(/(?=[A-Z])/));
    }

    /**
     * @description A function that identifies the case of a word
     * @param word The word to identify
     * @returns The case of the word
     * @example caseIdentifier('hello-world') // kebab
     * @example caseIdentifier('hello_world') // snake
     */
    caseIdentifier(word: string): enumCase {
        if (word.includes('-')) {
            return enumCase.kebab;
        }

        if (word.includes('_')) {
            return enumCase.snake;
        }

        if (word.includes('.')) {
            return enumCase.dot;
        }

        if (word.match(/[A-Z]/g)) {
            return enumCase.pascal;
        }

        return enumCase.camel;
    }

}

