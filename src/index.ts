import { Strings } from "./strings";
import { Utils } from "./utils";

/**
 * @description
 * This is the entry point of the library.
 * 
 */

export const utils = new Utils();
export const strings = new Strings();
export const futil = {
    utils,
    strings
}

