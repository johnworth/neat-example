import { camelcaseit } from '../../../common/functions';

export default {
    Query: {
        templates: async (resolve: any, parent: any, args: any, context:any, info: any) => {
            const result = await resolve(parent, args, context, info);
            console.log(result);
            console.log(camelcaseit(result));
            return camelcaseit(result);
        }
    }
};