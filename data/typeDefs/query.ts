import { gql } from "apollo-server";

export default gql`
    type Query {
        user(username: String): User

        appPermissions(username: String, appID: String, systemID: String): [AppPermission]
        
        analysis(username: String, analysisID: String): Analysis

        analysesByStatus(status: String): [Analysis]

        analysisByExternalID(externalID: String): Analysis

        analysisByID(analysisID: String): Analysis

        app(username: String, appID: String, systemID: String): App

        templates: [Template]
    }
`;