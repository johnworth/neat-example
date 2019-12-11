import { gql } from "apollo-server-express";

export default gql`
    type User {
        """The unique identifier for the user. Should be a UUID."""
        id: String

        """The short username for the user. Does not include @iplantcollaborative.org"""
        username: String

        """The full name of the user, combining their first name and last name."""
        name: String

        """The last name of the user."""
        lastName: String

        """The first name of the user."""
        firstName: String

        """The contact email address for the user."""
        email: String

        """The university the user is associated with."""
        institution: String

        sourceId: String

        """A JSON encoded string containing the layout settings."""
        session: JSON

        """A JSON encoded string containing the user's saved searches."""
        savedSearches: JSON

        """A JSON encoded string containing the user's preferences."""
        preferences: JSON

        """The user's workspace information."""
        workspace: Workspace

        """The user's system_id configuration."""
        systemIds: SystemIDs

        """The webhooks the user has configured."""
        webhooks: [Webhook]

        """The list of Apps that the user has access to."""
        apps: [App]

        """The list of Analyses associated with the user."""
        analyses: [Analysis]

        """List of tools accessible to the user."""
        tools: [Tool]

        """List of AVUs associated with the user."""
        avus: [AVU]
    }

    type Workspace {
        id: String
        rootCategoryId: String
        isPublic: Boolean
        newWorkspace: Boolean
    }

    type SystemIDs {
        deSystemId: String
        allSystemIds: [String]
    }

    type WebhookType {
        id: String
        type: String
        template: String
    }

    type Webhook {
        id: String
        url: String
        topics: [String]
        type: WebhookType
    }
`;
