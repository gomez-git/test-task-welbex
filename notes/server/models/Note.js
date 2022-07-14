import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Note extends Model {}

  Note.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    modelName: 'Note',
    tableName: 'notes',
  });

  return Note;
};
