import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    toJSON() {
      return { ...this.get(), password: undefined };
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'User',
    tableName: 'users',
  });

  return User;
};
