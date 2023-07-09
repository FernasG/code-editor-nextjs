import { RequestService } from "../Request";

export class Codespaces {
  static async findAll() {
    const response = await RequestService().get('codespaces');

    if (response.statusCode !== 200) return false;

    return response;
  }
}