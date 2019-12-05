import { merge } from 'lodash';
import GraphQLJSON from 'graphql-type-json';
import BigInt from 'graphql-bigint';

import Analysis from './Analysis';
import App from './App';
import Metadata from './Metadata';
import Query from './Query';
import Tool from './Tool';
import User from './User';

export default merge(
    {
        JSON: GraphQLJSON,
        BigInt: BigInt,
    }, 
    Analysis,
    App,
    Metadata,
    Query,
    Tool,
    User
);
