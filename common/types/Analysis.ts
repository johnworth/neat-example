import App, { AppStep } from './App';
import AVU from './AVU';
import Permission from './Permission';

export interface AnalysisBatchStatus {
    total?: Number;
    completed?: Number;
    running?: Number;
    submitted?: Number;
}

export interface AnalysisStepUpdate {
    status?: String
    message?: String
    timestamp?: String
}

export interface AnalysisStep {
    step_number?: Number
    external_id?: String
    start_date?: String
    end_date?: String
    status?: String
    app_step_number?: Number
    app_step?: AppStep
    step_type?: String
    updates?: [AnalysisStepUpdate]
}

export interface AnalysisParameterValue {
    value?: any
}

export interface AnalysisParameter {
    param_type?: String
    param_id?: String
    info_type?: String
    is_default_value?: Boolean
    param_name?: String
    parameter_value?: AnalysisParameterValue
    is_visible?: Boolean
    full_param_id?: String
    data_format?: String
}

export default interface Analysis {
    app?: App 
    avus?: AVU[]
    deleted?: Boolean
    description?: String
    end_date?: String
    id?: String
    name?: String
    notify?: Boolean
    parameters?: AnalysisParameter[]
    parent_id?: String
    permissions?: Permission[]
    planned_end_date?: String
    result_folder_path?: String
    start_date?: String
    status?: String
    steps?: AnalysisStep[]
    subdomain?: String
    system_id?: String
    type?: String
    username?: String
}