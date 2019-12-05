export default {
    AVU: {
        created_by: async (avu: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.functions.getUserInfo(avu.created_by);
        },

        modified_by: async (avu: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.functions.getUserInfo(avu.modified_by);
        },
    },

    Template: {
        attributes: async (tmpl: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getTemplateAttributesByID(tmpl.id);
        },
    },

    TemplateAttribute: {
        synonyms: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAttributeSynonyms(attr.id);
        },

        enum_values: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAttributeEnumValues(attr.id);
        },

        settings: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDatabase.getAttributeSettings(attr.id);
        },
    },
};
