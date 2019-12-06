import React from 'react';
import App from 'next/app';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import fetch from 'node-fetch';

// We're passing in a localhost URI for the client because
// an error message about only absolute URLs being supported gets
// spammed to the logs otherwise.
const graphqlClient = new ApolloClient({
    fetch: fetch,
    uri: 'http://localhost:3000/graphql' // We'll probably want to make this configurable.
}); 

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        
        return (
            <ApolloProvider client={graphqlClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        );
    }
};

