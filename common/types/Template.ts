export interface TemplateAttributeValueType {
    id?: string
    name?: string
}

export interface TemplateAttributeEnumValue {
    id?: string
    value?: string
    is_default?: Boolean
    display_order?: Number
}

export interface TemplateAttributeSynonym {
    id?: string
    name?: string
    description?: string
    required?: Boolean
    value_type?: TemplateAttributeValueType
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    settings?: JSON
    display_order?: Number
    enum_values?: TemplateAttributeEnumValue[]
}

export interface TemplateAttribute {
    id?: string
    name?: string
    description?: string
    required?: Boolean
    value_type?: TemplateAttributeValueType
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    settings?: JSON
    display_order?: Number
    parent_id?: string
    enum_values?: TemplateAttributeEnumValue[]

    // Recursive
    synonyms?: TemplateAttributeSynonym[]
}

export default interface Template {
    id?: string
    name?: string
    deleted?: Boolean
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    description?: string

    // Recursive, will contain attributes of attributes
    attributes?: TemplateAttribute[]

}