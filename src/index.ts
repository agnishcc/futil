import { Strings } from "./strings";
import { Utils } from "./utils";

/**
 * @description
 * Utils for working with various random things.
 * 
 */

export const utils = new Utils();

/**
 * @description
 * Utils for working with types of  strings.
 * 
 */
export const strings = new Strings();

/**
 * @description
 * Utils working with backend.
 */
export const bUtils = new BUtils();

/**
 * @description
 * This is the entry point of the library.
 */
export const futil = {
    utils,
    strings,
    bUtils
}

