export interface ContainerDevice {
    id?: String
    host_path?: String
    container_path?: String
}

export interface ContainerPort {
    id?: String
    host_port?: String
    container_port?: String
    bind_to_host?: Boolean
}

export interface ContainerVolume {
    id?: String
    host_path?: String
    container_path?: String
}

export interface ContainerVolumesFrom {
    id?: String
    name_prefix?: String
    read_only?: Boolean
    image?: ContainerImage
}

export interface ContainerImage {
    id?: String
    name?: String
    tag?: String
    url?: String
    deprecated?: Boolean
    auth?: String
    osg_image_path?: String
}

export interface Container {
    max_cpu_cores?: Number
    min_cpu_cores?: Number
    uid?: Number
    name?: String
    min_memory_limit?: BigInt
    working_directory?: String
    skip_tmp_mount?: Boolean
    entrypoint?: String
    memory_limit?: BigInt
    cpu_shares?: Number
    network_mode?: String
    min_disk_space?: BigInt
    pid_limit?: Number
    devices?: ContainerDevice[]
    volumes?: ContainerVolume[]
    volumes_froms?: ContainerVolumesFrom[]
}

export interface ToolArchitecture {
    id?: String
    name?: String
    description?: String
}

export interface ToolRequestStatusCode {
    id?: String
    name?: String
    description?: String
    email_template?: String
}

export interface ToolRequestStatus {
    id?: String
    date_assigned?: String
    comments?: String

    //UUID of the user that updated the tool request
    updater_id?: String

    status_code?: ToolRequestStatusCode
}

export interface ToolRequest {
    id?: String
    phone?: String
    tool_name?: String
    description?: String
    source_url?: String
    doc_url?: String
    version?: String
    attribution?: String
    multithreaded?: Boolean
    test_data_path?: String
    instructions?: String
    additional_info?: String
    additional_data_file?: String

    //UUID of the user that made the tool request
    requestor_id?: String
    
    statuses?: ToolRequestStatus[]
    tool_architecture?: ToolArchitecture
}

export default interface Tool {
    id?: String
    name?: String
    description?: String
    type?: String
    restricted?: Boolean
    container?: Container
    container_image?: ContainerImage
    attribution?: String
    version?: String
    tool_requests?: ToolRequest[]
    location?: String
    integrator_name?: String
    integrator_email?: String
    interactive?: Boolean
    time_limit_seconds?: BigInt
    gpu_enabled?: Boolean
}