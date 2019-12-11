
// Required settings
if (!process.env.ACCESS_TOKEN_URI) {
    throw new Error(`Environment variable ACCESS_TOKEN_URI must be set.`);
}
export const ACCESS_TOKEN_URI: string = process.env.ACCESS_TOKEN_URI;


if (!process.env.CLIENT_ID) {
    throw new Error(`Environment variable CLIENT_ID must be set.`);
}
export const CLIENT_ID: string = process.env.CLIENT_ID;


if (!process.env.CLIENT_SECRET) {
    throw new Error(`Environment variable CLIENT_SECRET must be set.`);
}
export const CLIENT_SECRET: string = process.env.CLIENT_SECRET;


if (!process.env.AUTHORIZATION_URI) {
    throw new Error(`Environment variable AUTHORIZATION_URI must be set.`);
}
export const AUTHORIZATION_URI: string = process.env.AUTHORIZATION_URI;


if (!process.env.REDIRECT_URI) {
    throw new Error(`Environment variable REDIRECT_URI must be set.`);
}
export const REDIRECT_URI: string = process.env.REDIRECT_URI;


if (!process.env.SERVER_NAME) {
    throw new Error(`Environment variable SERVER_NAME must be set.`);
}
export const SERVER_NAME: string = process.env.SERVER_NAME;


if (!process.env.SESSION_SECRET) {
    throw new Error(`Environment variable SESSION_SECRET must be set.`);
}
export const SESSION_SECRET: string = process.env.SESSION_SECRET;


if (!process.env.PROFILE_URI) {
    throw new Error(`Environment variable PROFILE_URI must be set.`);
}
export const PROFILE_URI: string = process.env.PROFILE_URI;


if (!process.env.NODE_ENV) {
    throw new Error(`Environment variable NODE_ENV must be set.`);
}
export const NODE_ENV: string = process.env.NODE_ENV;


if (!process.env.DE_DB_URL) {
    throw new Error(`Environment variable DE_DB_URL must be set.`);
}
export const DE_DB_URL: string = process.env.DE_DB_URL;


if (!process.env.METADATA_DB_URL) {
    throw new Error(`Environment variable METADATA_DB_URL must be set.`);
}
export const METADATA_DB_URL: string = process.env.METADATA_DB_URL;


if (!process.env.PERMISSIONS_URL) {
    throw new Error(`Environment variable PERMISSIONS_URL must be set.`);
}
export const PERMISSIONS_URL: string = process.env.PERMISSIONS_URL;


if (!process.env.APPS_URL) {
    throw new Error(`Environment variable APPS_URL must be set.`);
}
export const APPS_URL: string = process.env.APPS_URL;


if (!process.env.IPLANT_GROUPS_URL) {
    throw new Error(`Environment variable IPLANT_GROUPS_URL must be set.`);
}
export const IPLANT_GROUPS_URL: string = process.env.IPLANT_GROUPS_URL;


if (!process.env.GROUPER_USER) {
    throw new Error(`Environment variable GROUPER_USER must be set.`);
}
export const GROUPER_USER: string = process.env.GROUPER_USER;


// optional settings
export const PORT: number = parseInt(process.env.PORT || '3000', 10);