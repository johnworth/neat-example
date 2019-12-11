import { gql } from "apollo-server-express";

export default gql`
    type AnalysisBatchStatus {
        total: Int
        completed: Int
        running: Int
        submitted: Int
    }

    type AnalysisStepUpdate {
        status: String
        message: String
        timestamp: String
    }

    type AnalysisStep {
        stepNumber: Int
        externalId: String
        startFate: String
        endFate: String
        status: String
        appStepNumber: Int
        appStep: AppStep
        stepType: String
        updates: [AnalysisStepUpdate]
    }

    type AnalysisParameterValue {
        value: JSON
    }

    type AnalysisParameter {
        paramType: String
        paramId: String
        infoType: String
        isDefaultValue: Boolean
        paramName: String
        parameterValue: AnalysisParameterValue
        isVisible: Boolean
        fullParamId: String
        dataFormat: String
    }

    type Analysis {
        app: App 
        avus: [AVU]
        deleted: Boolean
        description: String
        endDate: String
        id: String
        name: String
        notify: Boolean
        parameters: [AnalysisParameter]
        parentId: String
        permissions: [Permission]
        plannedEndDate: String
        resultFolderPath: String
        startDate: String
        status: String
        steps: [AnalysisStep]
        subdomain: String
        systemId: String
        type: String
        username: String
    }
`;
