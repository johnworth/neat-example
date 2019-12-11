import AVU from 'common/types/AVU';
import User from 'common/types/User';
import Template, { TemplateAttribute } from 'common/types/Template';
import { TemplateAttributeSynonym, TemplateAttributeEnumValue } from 'common/types/Template';

export default {
    AVU: {
        createdBy: async (
            avu: AVU, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<User> => {
            return dataSources.iplantGroups.getUserInfo(avu.created_by);
        },

        modifiedBy: async (
            avu: AVU, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<User> => {
            return dataSources.iplantGroups.getUserInfo(avu.modified_by);
        },
    },

    Template: {
        attributes: async (
            tmpl: Template, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<TemplateAttribute[]> => {
            return dataSources.metadataDB.getTemplateAttributesByID(tmpl.id);
        },
    },

    TemplateAttribute: {
        synonyms: async (
            attr: TemplateAttribute, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<TemplateAttributeSynonym[]> => {
            return dataSources.metadataDB.getAttributeSynonyms(attr.id);
        },

        enumValues: async (
            attr: TemplateAttribute, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<TemplateAttributeEnumValue> => {
            return dataSources.metadataDB.getAttributeEnumValues(attr.id);
        },

        settings: async (
            attr: TemplateAttribute, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<TemplateAttribute> => {
            return dataSources.metadataDB.getAttributeSettings(attr.id);
        },
    },
};
