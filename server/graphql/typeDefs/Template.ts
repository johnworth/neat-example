import { gql } from "apollo-server-express";

export default gql`

    type TemplateAttributeValueType {
        id: String
        name: String
    }

    type TemplateAttributeEnumValue {
        id: String
        value: String
        is_default: Boolean
        displayOrder: Int
    }

    type TemplateAttributeSynonym {
        id: String
        name: String
        description: String
        required: Boolean
        valueType: TemplateAttributeValueType
        createdBy: String
        modifiedBy: String
        createdOn: String
        modifiedOn: String
        settings: JSON
        displayOrder: Int
        enumValues: [TemplateAttributeEnumValue]
    }

    type TemplateAttribute {
        id: String
        name: String
        description: String
        required: Boolean
        valueType: TemplateAttributeValueType
        createdBy: String
        modifiedBy: String
        createdOn: String
        modifiedOn: String
        settings: JSON
        displayOrder: Int
        parentId: String
        enumValues: [TemplateAttributeEnumValue]

        """Recursive"""
        synonyms: [TemplateAttributeSynonym]
    }

    type Template {
        id: String
        name: String
        deleted: Boolean
        createdBy: String
        modifiedBy: String
        createdOn: String
        modifiedOn: String
        description: String

        """Recursive, will contain attributes of attributes"""
        attributes: [TemplateAttribute] 

    }

`;
