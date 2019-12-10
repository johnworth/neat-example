import User from './User';

export default interface AVU {
    id?: string
    attribute?: string
    value?: string
    unit?: string
    target_id?: string
    target_type?: string
    created_on?: string
    created_by?: User
    modified_on?: string
    modified_by?: User
}