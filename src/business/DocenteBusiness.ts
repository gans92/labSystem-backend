import { DocentesDatabase } from '../database/DocentesDatabase'
import { v4 as generateId } from "uuid";

export class EstudanteBusiness {
 async getDocentes(req: Request, res: Response): Promise<any> {
    return await new DocentesDatabase().getAll();
}
}