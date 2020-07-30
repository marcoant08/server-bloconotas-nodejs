const Notes = require("../models/Notes");

module.exports = {
  async criar(req, res) {
    const { nome, conteudo } = req.body;

    const notas = await Notes.create({
      nome,
      conteudo,
    });

    return res.json(notas);
  },

  async listar(req, res) {
    const notas = await Notes.findAll();

    return res.json(notas);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, conteudo } = req.body;

    const nota = await Notes.findByPk(id);

    if (!nota) {
      return res.status(400).send({ error: "Nota não encontrada." });
    }

    await nota.update({
      nome,
      conteudo,
    });

    return res.json(nota);
  },

  async del(req, res) {
    const { id } = req.params;

    const nota = await Notes.findByPk(id);

    if (!nota) {
      return res.status(400).send({ error: "Nota não encontrada." });
    }

    await nota.destroy();

    return res.json({ message: "Nota deletada." });
  },
};
