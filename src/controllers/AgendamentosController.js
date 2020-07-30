const Agendamentos = require("../models/Agendamentos");

module.exports = {
  async criar(req, res) {
    const { nome, horario, telefone, servico } = req.body;

    const agendamentos = await Agendamentos.create({
      nome,
      horario,
      telefone,
      servico,
    });

    return res.json(agendamentos);
  },

  async listar(req, res) {
    const agendamentos = await Agendamentos.findAll();

    return res.json(agendamentos);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, horario, telefone, servico } = req.body;

    const agendamentos = await Agendamentos.findByPk(id);

    if (!agendamentos) {
      return res.status(400).send({ error: "Agendamento não encontrado." });
    }

    await agendamentos.update({
      nome,
      horario,
      telefone,
      servico,
    });

    return res.json(agendamentos);
  },

  async del(req, res) {
    const { id } = req.params;

    const agendamentos = await Agendamentos.findByPk(id);

    if (!agendamentos) {
      return res.status(400).send({ error: "Agendamento não encontrado." });
    }

    await agendamentos.destroy();

    return res.json({ message: "Agendamento deletado." });
  },
};
