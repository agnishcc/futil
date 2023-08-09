interface IBUtils {
    convertArrToHasuraObj(arr: any[]): string;
}

/**
 * @description Utility functions for the backend
 * @class BUtils
 * @implements {IBUtils}
 * @example const bUtils = new BUtils();
 */
export class BUtils implements IBUtils {
   
    /**
     * @description Converts an array to a Hasura object
     * @param {any[]} arr
     * @returns {string}
     * @memberof BUtils
     * @example const hasuraObj = bUtils.convertArrToHasuraObj(['id', 'name']); // {id, name}
     * @example const hasuraObj = bUtils.convertArrToHasuraObj(['id']); // {id}
     * @example const hasuraObj = bUtils.convertArrToHasuraObj([]); // {}
     */
   public convertArrToHasuraObj(arr: any[]): string {
        let str = '{';
        arr.forEach((item) => {
            str += item + ',';
        });
        str = str.slice(0, -1);
        str += '}';
        return str;
    }
}

