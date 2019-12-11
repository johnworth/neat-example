import _ from 'lodash';


/**
 * deepMapKeys recursively transforms the keys in the map using the provided
 * callback function.
 * 
 * @param obj An object that has keys that require modifying.
 * @param callback A function that transforms the strings passed to it.
 * @returns The new version of the object with the keys modified by the callback.
 */
export function deepMapKeys(obj: any, callback: (x: string) => string): any {
    return _.fromPairs(
        _.toPairsIn(obj).map(
            ([key, value]) => [ 
                callback(key), 
                _.isPlainObject(value) ? deepMapKeys(value, callback) : value 
            ]
        )
    );
}

/**
 * camelcaseit - Recursively iterates through the provided object and changes
 * all keys to camelCase.
 * 
 * @param obj An object that has keys that need to be camelCased.
 * @returns A new version of the object with the keys camcelCased.
 */
export const camelcaseit = (obj: any): any => deepMapKeys(obj, _.camelCase);