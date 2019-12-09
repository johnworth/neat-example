// Retrieve information from the iplant-groups service

import { RESTDataSource } from 'apollo-datasource-rest';
import UserInfo from '../../../common/types/UserInfo';

export default class IPlantGroupsDataSource extends RESTDataSource {
    grouperUser?: string;

    constructor() {
        super();
        this.baseURL = process.env.IPLANT_GROUPS_URL;
        this.grouperUser = process.env.GROUPER_USER;
    }

    /**
     * getUserInfo returns information about a user from the iplant-groups
     * service.
     * 
     * See [[GroupsUserInfo]] for the information returned.
     * 
     * Parameters:
     * @param username  A string containing the username. The 
     * @iplantcollaborative.org trailing text is removed if present.
     */
    async getUserInfo(username: string): Promise<UserInfo> {
        let requestUsername = username.replace("@iplantcollaborative.org", "");
        let retval = await this.get(`/subjects/${requestUsername}?user=${this.grouperUser}`);
        retval.username = requestUsername;
        return retval
    }
}