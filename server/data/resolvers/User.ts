export default {
    User: {
        // id: async (user, _args, { dataSources }) => {
        //     return dataSources.appsService.getUserInfo(user.username)
        // },

        saved_searches: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getUserSavedSearches(user.id);
        },

        session: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getUserSession(user.id);
        },

        preferences: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getUserPreferences(user.id);
        },

        webhooks: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getUserWebhooks(user.username);
        },

        apps: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getAccessibleApps(user.username);
        },

        workspace: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getWorkspace(user.username);
        },

        system_ids: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getSystemIDs(user.username);
        },

        analyses: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.analysesLookupsByUser(user.username);
        },

        tools: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getTools(user.username);
        },

        avus: async (user: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAVUs('user', user.id);
        },
    },
};
