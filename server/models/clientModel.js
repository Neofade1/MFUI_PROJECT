import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Client = sequelize.define(
  'Client',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    bday: {
      type: DataTypes.DATEONLY,
    },
    imageUrl:{
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);
