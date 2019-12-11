import { gql } from "apollo-server-express";

export default gql`
    scalar JSON
    scalar BigInt

    type AppRating {
        average: Float
        total: Float
        user: Int
        commentId: Int
    }

    type AppPipelineEligibility {
        isValid: Boolean
        reason: String
    }

    type AppPermissionSubject {
        sourceId: String
        id: String
    }

    type AppPermission {
        subject: AppPermissionSubject
        permission: String
    }

    type AppRequirements {
        minCpuCores: Float
        minMemoryLimit: BigInt
        minDiskSpace: BigInt
        maxCpuCores: Float
        memoryLimit: BigInt
        stepNumber: Int
    }

    type AppParameter {
        id: String
        name: String
        description: String
        label: String
        defaultValue: String
        isVisible: Boolean
        ordering: Int
        omitIfBlank: Boolean
        type: String
        valueType: String
        isImplicit: Boolean
        infoType: String
        stepId: String
        externalAppId: String
    }

    type AppReference {
        id: String
        referenceText: String
    }

    type AppDocumentation {
        value: String
        createdOn: String
        modifiedOn: String
        createdBy: User
        modifiedBy: User
    }

    type AppStep {
        id: String
        step: Int
        name: String
        label: String
        externalAppId: String
        tool: Tool
        type: String
        systemId: String
    }

    type App {
        id: String
        appType: String
        avus: [AVU]
        beta: Boolean
        canFavor: Boolean
        canRate: Boolean
        canRun: Boolean
        comments: [Comment]
        debug: Boolean
        deleted: Boolean
        description: String
        disabled: Boolean
        documentation: AppDocumentation
        editedDate: String

        """Here lies a recursive data structure. Beware."""
        groups: [JSON]

        integrationDate: String
        integratorEmail: String
        integratorName: String
        isFavorite: Boolean
        isPublic: Boolean
        label: String
        name: String
        parameters: [AppParameter]
        permission: String
        permissions: [Permission]
        pipelineEligibility: AppPipelineEligibility
        rating: AppRating
        references: [AppReference]
        requirements: [AppRequirements]
        stepCount: Int
        steps: [AppStep]
        systemId: String
        wikiUrl: String
    }
`;
