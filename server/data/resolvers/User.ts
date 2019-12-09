export default {
    User: {
        // id: async (user, _args, { dataSources }) => {
        //     return dataSources.apps.getUserInfo(user.username)
        // },

        saved_searches: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getUserSavedSearches(user.id);
        },

        session: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getUserSession(user.id);
        },

        preferences: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getUserPreferences(user.id);
        },

        webhooks: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getUserWebhooks(user.username);
        },

        apps: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getAccessibleApps(user.username);
        },

        workspace: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getWorkspace(user.username);
        },

        system_ids: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getSystemIDs(user.username);
        },

        analyses: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.analysesLookupsByUser(user.username);
        },

        tools: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getTools(user.username);
        },

        avus: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAVUs('user', user.id);
        },
    },
};
