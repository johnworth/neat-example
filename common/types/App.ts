import User from './User';
import Permission from './Permission';
import AVU from './AVU';
import Tool from './Tool';

export interface AppRating {
    average?: Number
    total?: Number
    user?: Number
    comment_id?: Number
}

export interface AppPipelineEligibility {
    is_valid?: Boolean
    reason?: String
}

export interface AppPermissionSubject {
    source_id?: String
    id?: String
}

export interface AppPermission {
    subject?: AppPermissionSubject
    permission?: String
}

export interface AppRequirements {
    min_cpu_cores?: Number
    min_memory_limit?: BigInt
    min_disk_space?: BigInt
    max_cpu_cores?: Number
    memory_limit?: BigInt
    step_number?: Number
}

export interface AppParameter {
    id?: String
    name?: String
    description?: String
    label?: String
    default_value?: String
    is_visible?: Boolean
    ordering?: Number
    omit_if_blank?: Boolean
    type?: String
    value_type?: String
    is_implicit?: Boolean
    info_type?: String
    step_id?: String
    external_app_id?: String
}

export interface AppReference {
    id?: String
    reference_text?: String
}

export interface AppDocumentation {
    value?: String
    created_on?: String
    modified_on?: String
    created_by?: User
    modified_by?: User
}

export interface AppStep {
    id?: String
    step?: Number
    name?: String
    label?: String
    external_app_id?: String
    tool?: Tool
    type?: String
    system_id?: String
}

export default interface App {
    id?: String

    app_type?: String
    avus?: AVU[]
    beta?: Boolean
    can_favor?: Boolean
    can_rate?: Boolean
    can_run?: Boolean
    comments?: [Comment]
    debug?: Boolean
    deleted?: Boolean
    description?: String
    disabled?: Boolean
    documentation?: AppDocumentation
    edited_date?: String

    // Beware recursion here.
    groups?: any[]

    integration_date?: String
    integrator_email?: String
    integrator_name?: String
    is_favorite?: Boolean
    is_public?: Boolean
    label?: String
    name?: String
    parameters?: AppParameter[]
    permission?: String
    permissions?: Permission[]
    pipeline_eligibility?: AppPipelineEligibility
    rating?: AppRating
    references?: AppReference[]
    requirements?: AppRequirements[]
    step_count?: Number
    steps?: AppStep[]
    system_id?: String
    wiki_url?: String
}