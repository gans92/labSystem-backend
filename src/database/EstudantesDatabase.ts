import { Estudante } from "../models/Estudante";
import { BaseDatabase } from "./BaseDatabase";

export class EstudantesDatabase extends BaseDatabase {
  TABLE_NAME: string = "Estudante";
  
  async adicionar(estudante: Estudante) {
    return await super.create(estudante);
  }

  async getAll() {
    return super.getAll();
  }

  async mudar(turma_id: string, id: string) {
    return await super.mudar(turma_id, id)
  }

  async getNomeEstudante(nome: string) {
    try {
      return await BaseDatabase.connection("Estudante")
        .select()
        .where("nome", "like", `%${nome}`);
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  async delete(id: string) {
    try {
      return await BaseDatabase.connection("Estudante")
        .delete()
        .where({ id });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
