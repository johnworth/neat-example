import User, {
    Webhook,
    Workspace,
    SystemIDs,
} from '../../../common/types/User';

export default {
    User: {
        savedSearches: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<string> => {
            return dataSources.deDB.getUserSavedSearches(user.id);
        },

        session: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any>=> {
            return dataSources.deDB.getUserSession(user.id);
        },

        preferences: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any> => {
            return dataSources.deDB.getUserPreferences(user.id);
        },

        webhooks: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<Webhook> => {
            return dataSources.apps.getUserWebhooks(user.username);
        },

        apps: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.apps.getAccessibleApps(user.username);
        },

        workspace: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<Workspace> => {
            return dataSources.apps.getWorkspace(user.username);
        },

        systemIds: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<SystemIDs> => {
            return dataSources.apps.getSystemIDs(user.username);
        },

        analyses: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.deDB.analysesLookupsByUser(user.username);
        },

        tools: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.apps.getTools(user.username);
        },

        avus: async (
            user: User, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.metadataDB.getAVUs('user', user.id);
        },
    },
};
