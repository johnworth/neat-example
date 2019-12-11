export interface TemplateAttributeValueType {
    id?: string
    name?: string
}

export interface TemplateAttributeEnumValue {
    id?: string
    value?: string
    isDefault?: boolean
    displayOrder?: number
}

export interface TemplateAttributeSynonym {
    id?: string
    name?: string
    description?: string
    required?: boolean
    valueType?: TemplateAttributeValueType
    createdBy?: string
    modifiedBy?: string
    createdOn?: string
    modifiedOn?: string
    settings?: any
    displayOrder?: number
    enumValues?: TemplateAttributeEnumValue[]
}

export interface TemplateAttribute {
    id?: string
    name?: string
    description?: string
    required?: boolean
    valueType?: TemplateAttributeValueType
    createdBy?: string
    modifiedBy?: string
    createdOn?: string
    modifiedOn?: string
    settings?: any
    displayOrder?: number
    parentId?: string
    enumValues?: TemplateAttributeEnumValue[]

    // Recursive
    synonyms?: TemplateAttributeSynonym[]
}

export default interface Template {
    id?: string
    name?: string
    deleted?: boolean
    createdBy?: string
    modifiedBy?: string
    createdOn?: string
    modifiedOn?: string
    description?: string

    // Recursive, will contain attributes of attributes
    attributes?: TemplateAttribute[]

}