import { RequestService } from "../Request";

export class Codespaces {
  static async findAll() {
    return RequestService().get('codespaces');
  }

  static async findOne(id: string) {
    return RequestService().get(`codespaces/${id}`);
  }

  static async create(name: string, description: string, language: string) {
    return RequestService().post('codespaces', { name, description, language });
  }

  static async save(id: string, code: string) {
    return RequestService().post('codespaces/save', { id, code });
  }

  static async run(id: string) {
    return RequestService().patch(`codespaces/run/${id}`);
  }

  static async findRequest(id: string, request_id: string) {
    return RequestService().get(`codespaces/request/${id}`, { request_id });
  }
}