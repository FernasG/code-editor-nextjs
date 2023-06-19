import { RequestService } from '@libraries';

export class Users {
    static async login(email: string, password: string) {
        const response = await RequestService({ useToken: false }).post('users/login', { email, password });

        if (response.statusCode !== 200) return response;

        return response;
    }
}