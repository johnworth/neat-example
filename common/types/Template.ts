export interface TemplateAttributeValueType {
    id?: String
    name?: String
}

export interface TemplateAttributeEnumValue {
    id?: String
    value?: String
    is_default?: Boolean
    display_order?: Number
}

export interface TemplateAttributeSynonym {
    id?: String
    name?: String
    description?: String
    required?: Boolean
    value_type?: TemplateAttributeValueType
    created_by?: String
    modified_by?: String
    created_on?: String
    modified_on?: String
    settings?: JSON
    display_order?: Number
    enum_values?: TemplateAttributeEnumValue[]
}

export interface TemplateAttribute {
    id?: String
    name?: String
    description?: String
    required?: Boolean
    value_type?: TemplateAttributeValueType
    created_by?: String
    modified_by?: String
    created_on?: String
    modified_on?: String
    settings?: JSON
    display_order?: Number
    parent_id?: String
    enum_values?: TemplateAttributeEnumValue[]

    // Recursive
    synonyms?: TemplateAttributeSynonym[]
}

export default interface Template {
    id?: String
    name?: String
    deleted?: Boolean
    created_by?: String
    modified_by?: String
    created_on?: String
    modified_on?: String
    description?: String

    // Recursive, will contain attributes of attributes
    attributes?: TemplateAttribute[]

}