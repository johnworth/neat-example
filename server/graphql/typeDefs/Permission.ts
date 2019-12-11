import { gql } from "apollo-server-express";

export default gql`
    type PermissionResource {
        id: String
        name: String
        resourceType: String
    }

    type PermissionSubject {
        id: String
        subjectId: String
        subjectSourceId: String
        subjectType: String
    }

    type Permission {
        id: String
        permissionLevel: String
        resource: PermissionResource
        subject: PermissionSubject
    }
`;
