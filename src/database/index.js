import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";
import User from "../models/User.js";
import Fotos from "../models/Fotos.js";

const models = [User, Fotos];
const connection = new Sequelize(databaseConfig);
try {

    models.forEach((model) => model.init(connection));
    models.forEach((model) => model.associate && model.associate(connection.models));
    
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
