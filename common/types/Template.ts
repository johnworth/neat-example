export interface TemplateAttributeValueType {
    id?: string
    name?: string
}

export interface TemplateAttributeEnumValue {
    id?: string
    value?: string
    is_default?: boolean
    display_order?: number
}

export interface TemplateAttributeSynonym {
    id?: string
    name?: string
    description?: string
    required?: boolean
    value_type?: TemplateAttributeValueType
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    settings?: any
    display_order?: number
    enum_values?: TemplateAttributeEnumValue[]
}

export interface TemplateAttribute {
    id?: string
    name?: string
    description?: string
    required?: boolean
    value_type?: TemplateAttributeValueType
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    settings?: any
    display_order?: number
    parent_id?: string
    enum_values?: TemplateAttributeEnumValue[]

    // Recursive
    synonyms?: TemplateAttributeSynonym[]
}

export default interface Template {
    id?: string
    name?: string
    deleted?: boolean
    created_by?: string
    modified_by?: string
    created_on?: string
    modified_on?: string
    description?: string

    // Recursive, will contain attributes of attributes
    attributes?: TemplateAttribute[]

}