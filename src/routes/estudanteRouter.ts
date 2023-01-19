import express from "express";
import { EstudanteController } from "../controller/EstudanteController";

export const estudanteRouter = express.Router();

const estudanteController = new EstudanteController();

estudanteRouter.get("/all", estudanteController.getAllEstudantes);
estudanteRouter.get("/buscar", estudanteController.getNomeEstudante);
estudanteRouter.post("/criar", estudanteController.create);
estudanteRouter.put("/change", estudanteController.mudarTurma);
estudanteRouter.delete("/delete", estudanteController.deleteEstudante);