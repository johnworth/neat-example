import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const TEMPLATES = gql`
    {
        templates {
            id
            name
            description
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(TEMPLATES, {});

    if (loading) return <p>Loading...</p>;

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <p>{error.stack}</p>
            </div>
        );
    }

    const templateItems = data.templates.map((t: any) => (
        <p>
            <h1>ID: {t.id}</h1>
            <h1>Name: {t.name}</h1>
            <h1>Description: {t.description}</h1>
            <br />
        </p>
    ))

    return (
        <div>
            {templateItems}
        </div>
    );
};
