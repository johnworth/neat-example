export default {
    Query: {
        user: async (
            _source: any, 
            { username }:{ username: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            var baseInfo = await dataSources.iplantGroups.getUserInfo(username);
            baseInfo["id"] = await dataSources.apps.getUserInfo(username);
            return baseInfo;
        },

        appPermissions: async (
            _source: any, 
            { username, appID, systemID}:{username: string, appID: string, systemID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.apps.getAppPermissions(username, appID, systemID);
        },

        analysis: async (
            _source: any, 
            { username, analysisID }:{ username: string, analysisID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDB.analysisLookupsByIDAndUser(username, analysisID);
        },

        app: async (_source: any, 
            { username, appID, systemID }:{ username: string, appID: string, systemID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.apps.getApp(username, appID, systemID);
        },

        analysesByStatus: async (_source: any, 
            { status }: { status: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDB.analysisLookupsByStatus(status);
        },

        analysisByExternalID: async (
            _source: any, 
            { externalID }:{ externalID: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDB.analysisLookupsByExternalID(externalID);
        },

        analysisByID: async (
            _source: any, 
            { analysisID }:{ analysisID: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDB.analysisLookupsByID(analysisID);
        },

        templates: async (
            _source: any, 
            {}:object, 
            { dataSources }:{ dataSources: any }
        ) => {
            return dataSources.metadataDB.getAllTemplates();
        },
    },
};
