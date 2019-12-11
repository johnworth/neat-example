export default {
    Analysis: {
        app: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getApp(analysis.username, analysis.app_id, analysis.system_id)
        },

        steps: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getAnalysisStepsByID(analysis.id);
        },

        parameters: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.apps.getAnalysisParameters(analysis.username, analysis.id);
        },

        permissions: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.permissions.getAnalysisPermissions(analysis.id);
        },

        avus: async (analysis: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAVUs('analysis', analysis.id);
        },
    },

    AnalysisStep: {
        updates: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getAnalysisStepUpdates(step.external_id);
        },

        appStep: async (step: any, _args: any, { dataSources }:{ dataSources: any }) => {
            console.log(step);
            // step.app_id comes from the database but isn't in the graphql schema. which is fine.
            return dataSources.deDB.getAppStepByNumberAndAppID(step.app_step_number, step.app_id);
        },
    },
};
