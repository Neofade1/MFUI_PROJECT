import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Order = sequelize.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM('open', 'closed', 'cancelled'),
      defaultValue: 'open',
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
    },
    imageUrl:{
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);
