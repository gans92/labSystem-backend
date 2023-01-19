import { DocentesDatabase } from "../database/DocentesDatabase";
import { Request, Response } from "express";

export class DocenteController {
    getAllDocentes = async (req: Request, res: Response): Promise<void> => {
        try {
        const DocenteBusiness = new DocentesDatabase();
        const result = await DocenteBusiness.getAll();
    
        res.status(200).send({ docentes: result });
        } catch (error) {
        res.status(400).send({ message: error.message });
        }
    };
}