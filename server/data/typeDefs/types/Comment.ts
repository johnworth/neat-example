import { gql } from "apollo-server-express";

export default gql`

type Comment {
    id: String
    value: String
    post_time: String
    retracted: Boolean
    retracted_by: String
    deleted: Boolean
    target_id: String
    target_type: String
    owner: String
}
`;
