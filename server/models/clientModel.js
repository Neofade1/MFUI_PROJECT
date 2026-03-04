import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

// Модель Client
const Client = sequelize.define(
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
  },
  {
    timestamps: false,
  }
);

// Модель Order
const Order = sequelize.define(
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
  },
  {
    timestamps: false,
  }
);

// Модель Cart
const Cart = sequelize.define(
  'Cart',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
  }
);

// Модель Product
const Product = sequelize.define(
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