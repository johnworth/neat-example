import { Pool } from 'pg';

// Uses the environment variabled supported by 'pg' to configure the pool.
const deDBpool = new Pool({
    connectionString: process.env.DE_DB_URL,
});

const metadataDBpool = new Pool({
    connectionString: process.env.METADATA_DB_URL,
});

export const queryDEDB = (text: string, params: any[]) => {
    return deDBpool.query(text, params);
};

export const queryMetadataDB = (text: string, params: any[]) => {
    return metadataDBpool.query(text, params);
};