import express from 'express';
import next from 'next';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './data/typeDefs';
import resolvers from './data/resolvers';

import IPlantGroupsDataSource from './data/dataSources/IPlantGroupsDataSource';
import AppsDataSource from './data/dataSources/AppsDataSource';
import DEDBDataSource from './data/dataSources/DEDBDataSource';
import PermissionsDataSource from './data/dataSources/PermissionsDataSource';
import MetadataDBDataSource from './data/dataSources/MetadataDBDataSource';


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
