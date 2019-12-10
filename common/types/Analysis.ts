import App, { AppStep } from './App';
import AVU from './AVU';
import Permission from './Permission';

export interface AnalysisBatchStatus {
    total?: number;
    completed?: number;
    running?: number;
    submitted?: number;
}

export interface AnalysisStepUpdate {
    status?: string
    message?: string
    timestamp?: string
}

export interface AnalysisStep {
    step_number?: number
    external_id?: string
    start_date?: string
    end_date?: string
    status?: string
    app_step_number?: number
    app_step?: AppStep
    step_type?: string
    updates?: [AnalysisStepUpdate]
}

export interface AnalysisParameterValue {
    value?: any
}

export interface AnalysisParameter {
    param_type?: string
    param_id?: string
    info_type?: string
    is_default_value?: boolean
    param_name?: string
    parameter_value?: AnalysisParameterValue
    is_visible?: boolean
    full_param_id?: string
    data_format?: string
}

export default interface Analysis {
    app?: App 
    avus?: AVU[]
    deleted?: boolean
    description?: string
    end_date?: string
    id?: string
    name?: string
    notify?: boolean
    parameters?: AnalysisParameter[]
    parent_id?: string
    permissions?: Permission[]
    planned_end_date?: string
    result_folder_path?: string
    start_date?: string
    status?: string
    steps?: AnalysisStep[]
    subdomain?: string
    system_id?: string
    type?: string
    username?: string
}