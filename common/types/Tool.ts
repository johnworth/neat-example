export interface ContainerDevice {
    id?: string
    host_path?: string
    container_path?: string
}

export interface ContainerPort {
    id?: string
    host_port?: string
    container_port?: string
    bind_to_host?: boolean
}

export interface ContainerVolume {
    id?: string
    host_path?: string
    container_path?: string
}

export interface ContainerVolumesFrom {
    id?: string
    name_prefix?: string
    read_only?: boolean
    image?: ContainerImage
}

export interface ContainerImage {
    id?: string
    name?: string
    tag?: string
    url?: string
    deprecated?: boolean
    auth?: string
    osg_image_path?: string
}

export interface Container {
    max_cpu_cores?: number
    min_cpu_cores?: number
    uid?: number
    name?: string
    min_memory_limit?: BigInt
    working_directory?: string
    skip_tmp_mount?: boolean
    entrypoint?: string
    memory_limit?: BigInt
    cpu_shares?: number
    network_mode?: string
    min_disk_space?: BigInt
    pid_limit?: number
    devices?: ContainerDevice[]
    volumes?: ContainerVolume[]
    volumes_froms?: ContainerVolumesFrom[]
}

export interface ToolArchitecture {
    id?: string
    name?: string
    description?: string
}

export interface ToolRequestStatusCode {
    id?: string
    name?: string
    description?: string
    email_template?: string
}

export interface ToolRequestStatus {
    id?: string
    date_assigned?: string
    comments?: string

    //UUID of the user that updated the tool request
    updater_id?: string

    status_code?: ToolRequestStatusCode
}

export interface ToolRequest {
    id?: string
    phone?: string
    tool_name?: string
    description?: string
    source_url?: string
    doc_url?: string
    version?: string
    attribution?: string
    multithreaded?: boolean
    test_data_path?: string
    instructions?: string
    additional_info?: string
    additional_data_file?: string

    //UUID of the user that made the tool request
    requestor_id?: string
    
    statuses?: ToolRequestStatus[]
    tool_architecture?: ToolArchitecture
}

export default interface Tool {
    id?: string
    name?: string
    description?: string
    type?: string
    restricted?: boolean
    container?: Container
    container_image?: ContainerImage
    attribution?: string
    version?: string
    tool_requests?: ToolRequest[]
    location?: string
    integrator_name?: string
    integrator_email?: string
    interactive?: boolean
    time_limit_seconds?: BigInt
    gpu_enabled?: boolean
}