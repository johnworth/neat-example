import { ApolloServer } from 'apollo-server';

import { 
    Functions, 
    AppsService, 
    UserInfoService,
    DEDatabase,
    PermissionsService,
    MetadataDatabase,
 } from './dataSources';

const { typeDefs } = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        functions: new Functions(),
        appsService: new AppsService(),
        userInfoService: new UserInfoService(),
        deDatabase: new DEDatabase(),
        permissionsService: new PermissionsService(),
        metadataDatabase: new MetadataDatabase(),
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
