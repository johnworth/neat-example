import UserInfo, * as User from '../../../common/types/UserInfo';

export default {
    User: {
        saved_searches: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<string> => {
            return dataSources.deDB.getUserSavedSearches(user.id);
        },

        session: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any>=> {
            return dataSources.deDB.getUserSession(user.id);
        },

        preferences: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any> => {
            return dataSources.deDB.getUserPreferences(user.id);
        },

        webhooks: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<User.Webhook> => {
            return dataSources.apps.getUserWebhooks(user.username);
        },

        apps: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.apps.getAccessibleApps(user.username);
        },

        workspace: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<User.Workspace> => {
            return dataSources.apps.getWorkspace(user.username);
        },

        system_ids: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<User.SystemIDs> => {
            return dataSources.apps.getSystemIDs(user.username);
        },

        analyses: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.deDB.analysesLookupsByUser(user.username);
        },

        tools: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.apps.getTools(user.username);
        },

        avus: async (
            user: UserInfo, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<any[]> => {
            return dataSources.metadataDB.getAVUs('user', user.id);
        },
    },
};
