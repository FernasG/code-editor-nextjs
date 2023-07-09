import { RequestService, StorageService } from '@libraries';

export class Users {
  static async signIn(email: string, password: string) {
    const response = await RequestService({ useToken: false }).post('users/login', { email, password });

    if (response.statusCode !== 200) return false;

    const { session_token, username } = response;

    StorageService.setN({ session_token, username, email, is_logged_in: 'true' });

    return response;
  }
}