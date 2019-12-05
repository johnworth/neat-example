export default {
    App: {
        parameters: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.appParametersByID(app.id);
        },

        permissions: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.permissionsService.getAppPermissions(app.id);
        },

        documentation: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.appDocsByID(app.id);
        },

        references: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.appReferencesByID(app.id);
        },

        avus: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAVUs('app', app.id);
        },

        comments: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getComments('app', app.id);
        },

        steps: async (app: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getAppStepsByAppID(app.id);
        },
    },

    AppStep: {
        tool: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getToolByID(step.tool_id);
        },
    },

    AppDocumentation: {
        created_by: async (doc: any, _args: any, { dataSources }:{ dataSources: any }) => {
            const username = await dataSources.deDatabase.getUsername(doc.created_by);
            if (username !== null) {
                return dataSources.functions.getUserInfo(username);
            } else {
                return null;
            }
        },

        modified_by: async (doc: any, _args: any, { dataSources }:{ dataSources: any }) => {
            const username = await dataSources.deDatabase.getUsername(doc.modified_by);
            if (username !== null) {
                return dataSources.functions.getUserInfo(username);
            } else {
                return null;
            }
        },
    },
};