import  Router  from "express";
import clientRouter from './clientRouter.js'
import productRouter from './productRouter.js'
import orderRouter from './orderRouter.js'
import cartRouter from './cartRouter.js'
export const router = new Router()

router.use('/clients', clientRouter)
router.use('/products',productRouter)
router.use('/order',orderRouter)
router.use('/cart',cartRouter)

