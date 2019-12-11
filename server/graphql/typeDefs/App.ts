import { gql } from "apollo-server-express";

export default gql`
    scalar JSON
    scalar BigInt

    type AppRating {
        average: Float
        total: Float
        user: Int
        comment_id: Int
    }

    type AppPipelineEligibility {
        is_valid: Boolean
        reason: String
    }

    type AppPermissionSubject {
        source_id: String
        id: String
    }

    type AppPermission {
        subject: AppPermissionSubject
        permission: String
    }

    type AppRequirements {
        min_cpu_cores: Float
        min_memory_limit: BigInt
        min_disk_space: BigInt
        max_cpu_cores: Float
        memory_limit: BigInt
        step_number: Int
    }

    type AppParameter {
        id: String
        name: String
        description: String
        label: String
        default_value: String
        is_visible: Boolean
        ordering: Int
        omit_if_blank: Boolean
        type: String
        value_type: String
        is_implicit: Boolean
        info_type: String
        step_id: String
        external_app_id: String
    }

    type AppReference {
        id: String
        reference_text: String
    }

    type AppDocumentation {
        value: String
        created_on: String
        modified_on: String
        created_by: User
        modified_by: User
    }

    type AppStep {
        id: String
        step: Int
        name: String
        label: String
        external_app_id: String
        tool: Tool
        type: String
        system_id: String
    }

    type App {
        id: String

        app_type: String
        avus: [AVU]
        beta: Boolean
        can_favor: Boolean
        can_rate: Boolean
        can_run: Boolean
        comments: [Comment]
        debug: Boolean
        deleted: Boolean
        description: String
        disabled: Boolean
        documentation: AppDocumentation
        edited_date: String

        """Here lies a recursive data structure. Beware."""
        groups: [JSON]

        integration_date: String
        integrator_email: String
        integrator_name: String
        is_favorite: Boolean
        is_public: Boolean
        label: String
        name: String
        parameters: [AppParameter]
        permission: String
        permissions: [Permission]
        pipeline_eligibility: AppPipelineEligibility
        rating: AppRating
        references: [AppReference]
        requirements: [AppRequirements]
        step_count: Int
        steps: [AppStep]
        system_id: String
        wiki_url: String
    }
`;
