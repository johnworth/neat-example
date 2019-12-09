export default {
    Tool: {
        container: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getContainerSettingsByToolID(tool.id);
        },

        container_image: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getContainerImageByToolID(tool.id);
        },

        tool_requests: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getToolRequests(tool.id);
        },

        gpu_enabled: async (tool: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getGPUEnabled(tool.id);
        }
    },

    ToolRequest: {
        tool_architecture: async (request: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getToolArchitecture(request.tool_architecture_id);
        },

        statuses: async (request: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getToolRequestStatuses(request.id);
        },
    },

    ToolRequestStatus: {
        status_code: async (status: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getToolRequestStatusCode(status.tool_request_status_code_id);
        },
    },

    Container: {
        volumes_froms: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getContainerVolumesFromsByContainerID(container.id);
        },

        volumes: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getContainerVolumesByContainerID(container.id);
        },

        devices: async (container: any, _args: any, { dataSources }:{ dataSources: any }) => {
            return dataSources.deDB.getContainerDevicesByContainerID(container.id);
        }
    },

    ContainerVolumesFrom: {
        image: async (vf: any, _args: any, { dataSources }:{ dataSources: any }) => {
            console.log(vf);
            return dataSources.deDB.getContainerImageByID(vf.container_images_id);
        },
    },
};
