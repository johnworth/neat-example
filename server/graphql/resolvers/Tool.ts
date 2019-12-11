import Tool, { 
    Container,
    ContainerDevice,
    ContainerImage,
    ContainerVolume,
    ContainerVolumesFrom,
    ToolRequest, 
    ToolRequestStatus,
    ToolRequestStatusCode,
    ToolArchitecture
} from '../../../common/types/Tool';

export default {
    Tool: {
        container: async (
            tool: Tool, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<Container> => dataSources.deDB.getContainerSettingsByToolID(tool.id),

        container_image: async (
            tool: Tool, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ContainerImage> => dataSources.deDB.getContainerImageByToolID(tool.id),

        tool_requests: async (
            tool: Tool, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ToolRequest[]> => dataSources.deDB.getToolRequests(tool.id),

        gpu_enabled: async (
            tool: Tool, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<boolean> => dataSources.deDB.getGPUEnabled(tool.id)
    },

    ToolRequest: {
        tool_architecture: async (
            request: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ToolArchitecture> => {
            return dataSources.deDB.getToolArchitecture(request.tool_architecture_id);
        },

        statuses: async (
            request: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ToolRequestStatus[]> => {
            return dataSources.deDB.getToolRequestStatuses(request.id);
        },
    },

    ToolRequestStatus: {
        status_code: async (
            status: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ToolRequestStatusCode> => {
            return dataSources.deDB.getToolRequestStatusCode(status.tool_request_status_code_id);
        },
    },

    Container: {
        volumes_froms: async (
            container: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ContainerVolumesFrom[]> => {
            return dataSources.deDB.getContainerVolumesFromsByContainerID(container.id);
        },

        volumes: async (
            container: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ContainerVolume[]> => {
            return dataSources.deDB.getContainerVolumesByContainerID(container.id);
        },

        devices: async (
            container: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ContainerDevice>  => {
            return dataSources.deDB.getContainerDevicesByContainerID(container.id);
        }
    },

    ContainerVolumesFrom: {
        image: async (
            vf: any, 
            _args: any, 
            { dataSources }:{ dataSources: any }
        ): Promise<ContainerImage> => {
            console.log(vf);
            return dataSources.deDB.getContainerImageByID(vf.container_images_id);
        },
    },
};
