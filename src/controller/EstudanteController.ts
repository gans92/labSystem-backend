import { EstudantesDatabase } from "../database/EstudantesDatabase";
import { Request, Response } from "express";
import { EstudanteBusiness } from "../business/EstudanteBusiness";

export class EstudanteController {
  getAllEstudantes = async (req: Request, res: Response): Promise<void> => {
    try {
      const EstudanteBusiness = new EstudantesDatabase();
      const result = await EstudanteBusiness.getAll();

      res.status(200).send({ estudantes: result });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, email, data_nasc, turma_id } = req.body;

      const estudanteBusiness = new EstudanteBusiness();
      await estudanteBusiness.criarEstudante({
        nome,
        email,
        data_nasc,
        turma_id,
      });

      res.status(200).send({ message: "Estudante criado com sucesso" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getNomeEstudante(req: Request, res: Response): Promise<void> {
    try {
      const nome = req.query.nome as string;

      const estudanteBusiness = new EstudanteBusiness();
      const result = await estudanteBusiness.getNomeEstudante(nome);

      res.status(200).send({ estudantes: result });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async mudarTurma(req: Request, res: Response): Promise<void> {
    try {
      const { turma_id, id } = req.body;

      const estudanteBusiness = new EstudanteBusiness();
      await estudanteBusiness.mudarTurma(turma_id, id);

      res.status(200).send({ message: "Turma alterada com sucesso" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteEstudante(req: Request, res: Response): Promise<void> {
    try {
      const id = req.body.id;

      const estudanteBusiness = new EstudanteBusiness();
      await estudanteBusiness.delete(id);

      res.status(200).send({ message: "Estudante deletado com sucesso" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
