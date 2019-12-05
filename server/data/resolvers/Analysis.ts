export default {
    Analysis: {
        app: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getApp(analysis.username, analysis.app_id, analysis.system_id)
        },

        steps: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getAnalysisStepsByID(analysis.id);
        },

        parameters: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.appsService.getAnalysisParameters(analysis.username, analysis.id);
        },

        permissions: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.permissionsService.getAnalysisPermissions(analysis.id);
        },

        avus: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAVUs('analysis', analysis.id);
        },
    },

    AnalysisStep: {
        updates: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getAnalysisStepUpdates(step.external_id);
        },

        app_step: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            console.log(step);
            // step.app_id comes from the database but isn't in the graphql schema. which is fine.
            return dataSources.deDatabase.getAppStepByNumberAndAppID(step.app_step_number, step.app_id);
        },
    },
};
