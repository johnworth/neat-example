import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import next from 'next';
import AppsDataSource from './graphql/dataSources/AppsDataSource';
import DEDBDataSource from './graphql/dataSources/DEDBDataSource';
import IPlantGroupsDataSource from './graphql/dataSources/IPlantGroupsDataSource';
import MetadataDBDataSource from './graphql/dataSources/MetadataDBDataSource';
import PermissionsDataSource from './graphql/dataSources/PermissionsDataSource';
import camelCaseMiddleware from './graphql/middleware/camelCase';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import ClientOAuth2 from 'client-oauth2';
import session, { SessionOptions } from 'express-session';
import * as config from './config';


const dev: boolean = config.NODE_ENV !== "production";

const app = next({dev});
const handle = app.getRequestHandler();

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(
    schema,
    camelCaseMiddleware
);

const apolloServer = new ApolloServer({
    schema: schemaWithMiddleware,
    dataSources: () => ({
        apps: new AppsDataSource(),
        iplantGroups: new IPlantGroupsDataSource(),
        deDB: new DEDBDataSource(),
        permissions: new PermissionsDataSource(),
        metadataDB: new MetadataDBDataSource(),
    }),
});

const cyverseAuth = new ClientOAuth2({
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    accessTokenUri: config.ACCESS_TOKEN_URI,
    authorizationUri: config.AUTHORIZATION_URI,
    redirectUri: config.REDIRECT_URI
});

app.prepare()
    .then(()=> {
        const server = express();

        // Modify this to enable persistent server-side cookies.
        let sess: SessionOptions = {
            secret: config.SESSION_SECRET || 'default-secret',
            cookie: {
                secure: !dev // Only use secure cookies when we're not in production.
            }
        }

        // Only necessary when we're in production mode.
        if (!dev) server.set('trust proxy', 1);

        // Add the session middleware to express
        server.use(session(sess));

        // Add middleware that throws an error if session support isn't working.
        server.use((req, _, nextHandler) => {
            if (!req.session) {
                return nextHandler(new Error('Unable to handle session'));
            }
            nextHandler();
        })

        server.get('/auth/provider', (_, res) => res.redirect(cyverseAuth.code.getUri()));

        server.get('/auth/provider/callback', (req, res) => {
            let username = "";
            cyverseAuth.code.getToken(req.originalUrl)
                .then(function (user) {
                    fetch(config.PROFILE_URI + user.accessToken)
                        .then(res => res.json())
                        .then(json => {
                            username = json.id;
        
                            const current = new Date();

                            if (!req.session) {
                                res.status(500).send("Unable to handle session in /auth/provider/callback");
                                return
                            }

                            req.session.accessToken = user.accessToken;
                            req.session.username = username;
                            req.session.expiry = current.setSeconds(current.getSeconds() + Number(user.data.expires_in));
        
                            // redirect user to app
                            return res.redirect(config.SERVER_NAME);
                        })
                        .catch((e) => {
                            res.send(500).send(e.message);
                        });
                })
                .catch((e) => {
                    res.status(500).send(e.message);
                });
        })

        // Configure Apollo to use express as the app.
        apolloServer.applyMiddleware({ app: server });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(config.PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${config.PORT}`);
        });
    })
    .catch(exception => {
        console.error(exception.stack);
        process.exit(1);
    });
