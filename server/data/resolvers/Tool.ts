export default {
    Tool: {
        container: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getContainerSettingsByToolID(tool.id);
        },

        container_image: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getContainerImageByToolID(tool.id);
        },

        tool_requests: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getToolRequests(tool.id);
        },

        gpu_enabled: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getGPUEnabled(tool.id);
        }
    },

    ToolRequest: {
        tool_architecture: async (request: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getToolArchitecture(request.tool_architecture_id);
        },

        statuses: async (request: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getToolRequestStatuses(request.id);
        },
    },

    ToolRequestStatus: {
        status_code: async (status: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getToolRequestStatusCode(status.tool_request_status_code_id);
        },
    },

    Container: {
        volumes_froms: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getContainerVolumesFromsByContainerID(container.id);
        },

        volumes: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getContainerVolumesByContainerID(container.id);
        },

        devices: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDatabase.getContainerDevicesByContainerID(container.id);
        }
    },

    ContainerVolumesFrom: {
        image: async (vf: any, _args: any, { dataSources }:{ dataSources: any }) => {
            console.log(vf);
            return dataSources.deDatabase.getContainerImageByID(vf.container_images_id);
        },
    },
};
