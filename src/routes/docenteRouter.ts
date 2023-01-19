import express from "express";
import { DocenteController } from "../controller/DocenteController";

export const docenteRouter = express.Router();

const docenteController = new DocenteController();

docenteRouter.get("/all", docenteController.getAllDocentes);