import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Product = sequelize.define(
  'Product',
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
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);
