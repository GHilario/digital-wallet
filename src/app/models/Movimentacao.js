import { Model, Sequelize } from 'sequelize';

class Movimentacao extends Model {
    static init(sequelize) {
        super.init(
            {
                id_transacao: Sequelize.INTEGER,
                data:Sequelize.DATETIME,
                login_origem: Sequelize.STRING, 
                login_destino: Sequelize.STRING, 
                valor_transferido: Sequelize.FLOAT, 
            }, 
            {
                sequelize,
                tableName:'movimentacao',
            }
        );

        return this;
    }
}

export default Movimentacao;