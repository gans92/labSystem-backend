import { EstudantesDatabase } from "../database/EstudantesDatabase";
import { v4 as generateId } from "uuid";

export class EstudanteBusiness {
  getAllEstudantes = async (): Promise<any> => {
    return await new EstudantesDatabase().getAll();
  };

  criarEstudante = async ({
    nome,
    email,
    data_nasc,
    turma_id,
  }: any): Promise<void> => {
    if (nome === "" || email === "" || data_nasc === "" || turma_id === "") {
      throw new Error("Algum campo está vazio");
    }

    if (!nome || !email || !data_nasc || !turma_id) {
      throw new Error("Dados inválidos");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const id = generateId();

    const estudanteDatabase = new EstudantesDatabase();
    await estudanteDatabase.create({ id, nome, email, data_nasc, turma_id });
  };

  getNomeEstudante = async (nome: string): Promise<any> => {
    if (!nome) {
      throw new Error("Nome inválido");
    }

    const estudanteDatabase = new EstudantesDatabase();
    const result = await estudanteDatabase.getNomeEstudante(nome);

    return result;
  };

  mudarTurma = async (turma_id: string, id: string): Promise<any> => {
    if (!turma_id || !id) {
      throw new Error("Dados inválidos");
    }

    const estudanteDatabase = new EstudantesDatabase();
    await estudanteDatabase.mudar(turma_id, id);
  };

  delete = async (id: string): Promise<any> => {
    if (!id) {
      throw new Error("Id inválido");
    }

    const estudanteDatabase = new EstudantesDatabase();
    await estudanteDatabase.delete(id);
  };
}
