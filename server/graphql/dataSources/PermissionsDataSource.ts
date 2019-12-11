import { RESTDataSource } from 'apollo-datasource-rest';
import * as config from '../../config';

export default class PermissionsDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.PERMISSIONS_URL;
    }

    async getAnalysisPermissions(analysisID: string) {
        const data = await this.get(`permissions/resources/analysis/${analysisID}`);
        return data.permissions;
    }

    async getAppPermissions(appID: string) {
        const data = await this.get(`permissions/resources/app/${appID}`);
        return data.permissions;
    }

    async getToolPermissions(toolID: string) {
        const data = await this.get(`permissions/resources/tool/${toolID}`);
        return data.permissions;
    }
}
