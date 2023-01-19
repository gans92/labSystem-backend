import { ping } from "./endpoints/ping";
import { getAllTurmas } from "./endpoints/turmas/getAllTurmas";
import criarDocente from "./endpoints/docentes/criarDocente";
import atualizarDocenteTurma from "./endpoints/docentes/atualizarDocenteTurma";
import criarTurma from "./endpoints/turmas/criarTurma";
import atualizarTurmaModulo from "./endpoints/turmas/atualizarTurmaModulo";

import { app } from "./app";
import { estudanteRouter } from "./routes/estudanteRouter";
import { docenteRouter } from "./routes/docenteRouter";



//teste
app.get("/ping", ping);

//Estudante
app.use("/estudante", estudanteRouter);
app.use("/docente", docenteRouter);

//Turma
app.get("/all/turmas", getAllTurmas);
app.post("/criar/turma", criarTurma);
app.put("/turmas", atualizarTurmaModulo);

//Docente
app.post("/criar/docente", criarDocente);
app.put("/docentes", atualizarDocenteTurma);