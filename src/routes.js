const express = require("express");
const NotesController = require("./controllers/NotesController");

const routes = express.Router();

routes.post("/notas/criar", NotesController.criar); //criar agendamento
routes.get("/notas/listar", NotesController.listar); //listar agendamentos
routes.put("/notas/atualizar/:id", NotesController.atualizar); //atualizar agendamento
routes.delete("/notas/deletar/:id", NotesController.del); //deletar agendament

module.exports = routes;
