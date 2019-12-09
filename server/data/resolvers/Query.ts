export default {
    Query: {
        user: async (
            _source: any, 
            { username }:{ username: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            var baseInfo = await dataSources.iplantGroupsDataSource.getUserInfo(username);
            baseInfo["id"] = await dataSources.appsService.getUserInfo(username);
            return baseInfo;
        },

        appPermissions: async (
            _source: any, 
            { username, appID, systemID}:{username: string, appID: string, systemID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.appsService.getAppPermissions(username, appID, systemID);
        },

        analysis: async (
            _source: any, 
            { username, analysisID }:{ username: string, analysisID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDatabase.analysisLookupsByIDAndUser(username, analysisID);
        },

        app: async (_source: any, 
            { username, appID, systemID }:{ username: string, appID: string, systemID: string}, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.appsService.getApp(username, appID, systemID);
        },

        analysesByStatus: async (_source: any, 
            { status }: { status: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDatabase.analysisLookupsByStatus(status);
        },

        analysisByExternalID: async (
            _source: any, 
            { externalID }:{ externalID: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDatabase.analysisLookupsByExternalID(externalID);
        },

        analysisByID: async (
            _source: any, 
            { analysisID }:{ analysisID: string }, 
            { dataSources }:{ dataSources: any }
        ) => {
            return await dataSources.deDatabase.analysisLookupsByID(analysisID);
        },

        templates: async (
            _source: any, 
            {}:object, 
            { dataSources }:{ dataSources: any }
        ) => {
            return dataSources.metadataDatabase.getAllTemplates();
        },
    },
};
