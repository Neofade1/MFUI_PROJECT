import { sequelize } from "../db";
import { Cart } from "./CartModels";
import { Client } from "./clientModel";
import { Order } from "./orderModels";
import { Product } from "./ProductsModels";

Client.hasMany(Order)
Order.belongsTo(Client)

Product.belongsToMany(Order, {through:'Cart'})
Order.belongsToMany(Product, {through:'Cart'})
export { sequelize,Cart,Client,Order,Product}