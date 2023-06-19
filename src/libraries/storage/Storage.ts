const Storage = ((): { [x: string]: string | null } => {
    const apiURL = process.env.API_URL ?? '';
    const sessionToken = localStorage.getItem('session_token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return { API_URL: apiURL, SESSION_TOKEN: sessionToken, USERNAME: username, EMAIL: email };
});

export class StorageService {
    static get(key: string): string | null {
        const storage = Storage();

        if (!Object.keys(storage).includes(key)) return null;

        return storage[key];
    }
}