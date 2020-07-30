const {Model, DataTypes} = require('sequelize');

class Notes extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING, 
            conteudo: DataTypes.STRING
        }, { sequelize })
    }
}

module.exports = Notes;