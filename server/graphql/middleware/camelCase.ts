import { camelcaseit } from '../../../common/functions';

export default async (resolve: any, parent: any, args: any, context:any, info: any) => {
    const result = await resolve(parent, args, context, info);
    return camelcaseit(result);
};