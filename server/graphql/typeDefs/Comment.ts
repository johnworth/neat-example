import { gql } from "apollo-server-express";

export default gql`

type Comment {
    id: String
    value: String
    post_time: String
    retracted: Boolean
    retractedBy: String
    deleted: Boolean
    targetId: String
    targetType: String
    owner: String
}
`;
