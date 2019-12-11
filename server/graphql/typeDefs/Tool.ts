import { gql } from "apollo-server-express";

export default gql`
    type ContainerDevice {
        id: String
        hostPath: String
        containerPath: String
    }

    type ContainerPort {
        id: String
        hostPort: String
        containerPort: String
        bindToHost: Boolean
    }

    type ContainerVolume {
        id: String
        hostPath: String
        containerPath: String
    }

    type ContainerVolumesFrom {
        id: String
        namePrefix: String
        readOnly: Boolean
        image: ContainerImage
    }

    type ContainerImage {
        id: String
        name: String
        tag: String
        url: String
        deprecated: Boolean
        auth: String
        osgImagePath: String
    }

    type Container {
        maxCpuCores: Float
        minCpuCores: Float
        uid: Int
        name: String
        minMemoryLimit: BigInt
        workingDirectory: String
        skipTmpMount: Boolean
        entrypoint: String
        memoryLimit: BigInt
        cpuShares: Int
        networkMode: String
        minDiskSpace: BigInt
        pidLimit: Int
        devices: [ContainerDevice]
        volumes: [ContainerVolume]
        volumesFroms: [ContainerVolumesFrom]
    }

    type ToolArchitecture {
        id: String
        name: String
        description: String
    }

    type ToolRequestStatusCode {
        id: String
        name: String
        description: String
        emailTemplate: String
    }

    type ToolRequestStatus {
        id: String
        dateAssigned: String
        comments: String

        """UUID of the user that updated the tool request"""
        updaterId: String

        statusCode: ToolRequestStatusCode
    }

    type ToolRequest {
        id: String
        phone: String
        toolName: String
        description: String
        sourceUrl: String
        docUrl: String
        version: String
        attribution: String
        multithreaded: Boolean
        testDataPath: String
        instructions: String
        additionalInfo: String
        additionalDataFile: String

        """UUID of the user that made the tool request"""
        requestorId: String
        
        statuses: [ToolRequestStatus]
        toolArchitecture: ToolArchitecture
    }

    type Tool {
        id: String
        name: String
        description: String
        type: String
        restricted: Boolean
        container: Container
        containerImage: ContainerImage
        attribution: String
        version: String
        toolRequests: [ToolRequest]
        location: String
        integratorName: String
        integratorEmail: String
        interactive: Boolean
        timeLimitAeconds: BigInt
        gpuEnabled: Boolean
    }
`;
