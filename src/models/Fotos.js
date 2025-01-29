import Sequelize, { Model } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
export default class Fotos extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.APP_URL}/images/${this.filename}`;
        },
      }
    }, {
      sequelize,
      tableName: 'Fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: 'user_id' });
  }
}