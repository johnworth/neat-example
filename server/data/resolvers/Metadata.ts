export default {
    AVU: {
        created_by: async (avu: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.iplantGroups.getUserInfo(avu.created_by);
        },

        modified_by: async (avu: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.iplantGroups.getUserInfo(avu.modified_by);
        },
    },

    Template: {
        attributes: async (tmpl: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getTemplateAttributesByID(tmpl.id);
        },
    },

    TemplateAttribute: {
        synonyms: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAttributeSynonyms(attr.id);
        },

        enum_values: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAttributeEnumValues(attr.id);
        },

        settings: async (attr: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.metadataDB.getAttributeSettings(attr.id);
        },
    },
};
