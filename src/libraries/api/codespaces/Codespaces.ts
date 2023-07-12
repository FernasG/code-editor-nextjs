import { RequestService } from "../Request";

export class Codespaces {
  static async findAll() {
    const response = await RequestService().get('codespaces');

    if (response.statusCode !== 200) return false;

    return response;
  }

  static async findOne(id: string) {
    const response = await RequestService().get(`codespaces/${id}`);

    if (response.statusCode !== 200) return false;

    return response;
  }

  static async create(name: string, description: string, language: string) {
    const response = await RequestService().post('codespaces', { name, description, language });

    if (response.statusCode !== 201) return false;

    return response;
  }

  static async save(id: string, code: string) {
    const response = await RequestService().post('codespaces/save', { id, code });

    if (response.statusCode !== 200) return false;

    return response;
  }

  static async run(id: string) {
    const response = await RequestService().patch(`codespaces/run/${id}`);

    if (response.statusCode !== 200) return false;

    return response;
  }

  static async findRequest(id: string, request_id: string) {
    const response = await RequestService().get(`codespaces/request/${id}`, { request_id });

    if (response.statusCode !== 200) return false;

    return response;
  }
}