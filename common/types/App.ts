import User from './User';
import Permission from './Permission';
import AVU from './AVU';
import Tool from './Tool';

export interface AppRating {
    average?: number
    total?: number
    user?: number
    comment_id?: number
}

export interface AppPipelineEligibility {
    is_valid?: boolean
    reason?: string
}

export interface AppPermissionSubject {
    source_id?: string
    id?: string
}

export interface AppPermission {
    subject?: AppPermissionSubject
    permission?: string
}

export interface AppRequirements {
    min_cpu_cores?: number
    min_memory_limit?: BigInt
    min_disk_space?: BigInt
    max_cpu_cores?: number
    memory_limit?: BigInt
    step_number?: number
}

export interface AppParameter {
    id?: string
    name?: string
    description?: string
    label?: string
    default_value?: string
    is_visible?: boolean
    ordering?: number
    omit_if_blank?: boolean
    type?: string
    value_type?: string
    is_implicit?: boolean
    info_type?: string
    step_id?: string
    external_app_id?: string
}

export interface AppReference {
    id?: string
    reference_text?: string
}

export interface AppDocumentation {
    value?: string
    created_on?: string
    modified_on?: string
    created_by?: User
    modified_by?: User
}

export interface AppStep {
    id?: string
    step?: number
    name?: string
    label?: string
    external_app_id?: string
    tool?: Tool
    type?: string
    system_id?: string
}

export default interface App {
    id?: string

    app_type?: string
    avus?: AVU[]
    beta?: boolean
    can_favor?: boolean
    can_rate?: boolean
    can_run?: boolean
    comments?: [Comment]
    debug?: boolean
    deleted?: boolean
    description?: string
    disabled?: boolean
    documentation?: AppDocumentation
    edited_date?: string

    // Beware recursion here.
    groups?: any[]

    integration_date?: string
    integrator_email?: string
    integrator_name?: string
    is_favorite?: boolean
    is_public?: boolean
    label?: string
    name?: string
    parameters?: AppParameter[]
    permission?: string
    permissions?: Permission[]
    pipeline_eligibility?: AppPipelineEligibility
    rating?: AppRating
    references?: AppReference[]
    requirements?: AppRequirements[]
    step_count?: number
    steps?: AppStep[]
    system_id?: string
    wiki_url?: string
}