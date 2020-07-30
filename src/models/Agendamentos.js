const { Model, DataTypes } = require("sequelize");

class Agendamentos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        horario: DataTypes.DATE,
        telefone: DataTypes.STRING,
        servico: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = Agendamentos;
