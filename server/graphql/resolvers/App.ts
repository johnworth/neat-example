export default {
    App: {
        parameters: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.appParametersByID(app.id);
        },

        permissions: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.permissions.getAppPermissions(app.id);
        },

        documentation: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.appDocsByID(app.id);
        },

        references: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.appReferencesByID(app.id);
        },

        avus: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAVUs('app', app.id);
        },

        comments: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getComments('app', app.id);
        },

        steps: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getAppStepsByAppID(app.id);
        },
    },

    AppStep: {
        tool: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getToolByID(step.tool_id);
        },
    },

    AppDocumentation: {
        created_by: async (doc: any, _args: any, { dataSources }:{ dataSources: any }) => {
            const username = await dataSources.deDB.getUsername(doc.created_by);
            return dataSources.iplantGroups.getUserInfo(username);
        },

        modified_by: async (doc: any, _args: any, { dataSources }:{ dataSources: any }) => {
            const username = await dataSources.deDB.getUsername(doc.modified_by);
            return dataSources.iplantGroups.getUserInfo(username);
        },
    },
};