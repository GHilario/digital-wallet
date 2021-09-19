import { Model, Sequelize } from 'sequelize';

class Saldo extends Model {
    static init(sequelize) {
        super.init(
            {
                login: Sequelize.STRING, 
                saldo: Sequelize.FLOAT, 
            }, 
            {
                sequelize,
                tableName:'saldo',
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'login' });
      }
}

export default Saldo;