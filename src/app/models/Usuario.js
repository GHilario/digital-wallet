import { Model, Sequelize } from 'sequelize';

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                login: Sequelize.STRING, 
                senha: Sequelize.STRING, 
                nome: Sequelize.STRING, 
            }, 
            {
                sequelize,
                tableName:'usuario',
            }
        );

        return this;
    }
}

export default Usuario;