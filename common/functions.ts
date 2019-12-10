import _ from 'lodash';

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

export const camelcaseit = (obj: any): any => deepMapKeys(obj, _.camelCase)