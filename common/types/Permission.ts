export interface PermissionResource {
    id?: String
    name?: String
    resource_type?: String
}

export interface PermissionSubject {
    id?: String
    subject_id?: String
    subject_source_id?: String
    subject_type?: String
}

export default interface Permission {
    id?: String
    permission_level?: String
    resource?: PermissionResource
    subject?: PermissionSubject
}