export default interface Comment {
    id?: string
    value?: string
    post_time?: string
    retracted?: boolean
    retracted_by?: string
    deleted?: boolean
    target_id?: string
    target_type?: string
    owner?: string
}