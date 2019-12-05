import { RESTDataSource } from 'apollo-datasource-rest';

class Functions extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GATEWAY;
    }

    async getUserInfo(username: string) {
        var data =  await this.post(
            'function/get-user-info',
            {'username':username},
        )

        // Need to rename the id field to username
        data = JSON.parse(data);
        data.username = data.id
        delete data.id
        
        return data;
    }
}

export default Functions;
