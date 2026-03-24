import { sequelize } from "../db.js";
import { Cart } from "./CartModels.js";
import { Client } from "./clientModel.js";
import { Order } from "./orderModels.js";
import { Product } from "./ProductsModels.js";

Client.hasMany(Order)
Order.belongsTo(Client)

Product.belongsToMany(Order, {through:'Cart'})
Order.belongsToMany(Product, {through:'Cart'})
export { sequelize,Cart,Client,Order,Product}