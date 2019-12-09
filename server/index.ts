import express from 'express';
import next from 'next';
import { ApolloServer } from 'apollo-server-express';

import { 
    AppsService, 
    UserInfoService,
    DEDatabase,
    PermissionsService,
    MetadataDatabase,
 } from './data/dataSources';

 import typeDefs from './data/typeDefs';
 import resolvers from './data/resolvers';


const dev: boolean = process.env.NODE_ENV !== 'production';
const port: number = parseInt(process.env.PORT || '3000', 10);

const app = next({dev});
const handle = app.getRequestHandler();

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        appsService: new AppsService(),
        userInfoService: new UserInfoService(),
        deDatabase: new DEDatabase(),
        permissionsService: new PermissionsService(),
        metadataDatabase: new MetadataDatabase(),
    }),
});

app.prepare()
    .then(()=> {
        const server = express();

        apolloServer.applyMiddleware({ app: server });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch(exception => {
        console.error(exception.stack);
        process.exit(1);
    });
