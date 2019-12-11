import { gql } from "apollo-server-express";

export default gql`

    type AVU {
        id: String
        attribute: String
        value: String
        unit: String
        targetId: String
        targetType: String
        createdOn: String
        createdBy: User
        modifiedOn: String
        modifiedBy: User
    }

`;
