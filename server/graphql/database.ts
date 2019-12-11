import { Pool } from 'pg';
import * as config from '../config';

// Uses the environment variabled supported by 'pg' to configure the pool.
const deDBpool = new Pool({
    connectionString: config.DE_DB_URL,
});

const metadataDBpool = new Pool({
    connectionString: config.METADATA_DB_URL,
});

export const queryDEDB = (text: string, params: any[]) => {
    return deDBpool.query(text, params);
};

export const queryMetadataDB = (text: string, params: any[]) => {
    return metadataDBpool.query(text, params);
};