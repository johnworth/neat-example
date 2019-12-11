import express from 'express';
import next from 'next';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import IPlantGroupsDataSource from './graphql/dataSources/IPlantGroupsDataSource';
import AppsDataSource from './graphql/dataSources/AppsDataSource';
import DEDBDataSource from './graphql/dataSources/DEDBDataSource';
import PermissionsDataSource from './graphql/dataSources/PermissionsDataSource';
import MetadataDBDataSource from './graphql/dataSources/MetadataDBDataSource';


const dev: boolean = process.env.NODE_ENV !== 'production';
const port: number = parseInt(process.env.PORT || '3000', 10);

const app = next({dev});
const handle = app.getRequestHandler();

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        apps: new AppsDataSource(),
        iplantGroups: new IPlantGroupsDataSource(),
        deDB: new DEDBDataSource(),
        permissions: new PermissionsDataSource(),
        metadataDB: new MetadataDBDataSource(),
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
