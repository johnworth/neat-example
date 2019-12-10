export interface PermissionResource {
    id?: string
    name?: string
    resource_type?: string
}

export interface PermissionSubject {
    id?: string
    subject_id?: string
    subject_source_id?: string
    subject_type?: string
}

export default interface Permission {
    id?: string
    permission_level?: string
    resource?: PermissionResource
    subject?: PermissionSubject
}