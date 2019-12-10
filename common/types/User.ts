
export interface Workspace {
    id?: string;
    root_category_id?: string;
    is_public?: boolean;
    new_workspace?: boolean;
}

export interface SystemIDs {
    de_system_id?: string;
    all_system_ids?: string[];
}

export interface WebhookType {
    id?: string;
    type?: string;
    template?: string;
}

export interface Webhook {
    id?: string;
    url?: string;
    topics?: [String];
    type?: WebhookType
}

export default interface User {
    id?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    institution?: string;
    source_id?: string;
    username?: string;
    session?: any;
    saved_searches?: any;
    preferences?: any;
    workspace?: Workspace;
    system_ids?: SystemIDs;
    webhooks?: Webhook[];
};