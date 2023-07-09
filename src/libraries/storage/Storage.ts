const Storage = ((): { [x: string]: string | null } => {
    const apiURL = process.env.API_URL ?? '';
    const sessionToken = localStorage.getItem('session_token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return { api_url: apiURL, session_token: sessionToken, username: username, email: email };
});

export class StorageService {
    static get(key: string): string | null {
        const storage = Storage();

        if (!Object.keys(storage).includes(key)) return null;

        return storage[key];
    }

    static set(key: string, value: string): void {
        localStorage.setItem(key, value);

        return;
    }

    static setN(attributes: { [x: string]: string }): void {
        if (!Object.keys.length) return;

        for (const [key, value] of Object.entries(attributes)) StorageService.set(key, value);

        return;
    }
}