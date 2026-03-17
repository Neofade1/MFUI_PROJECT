import { createProducts, getAllProducts } from "../controllers/productControler.js"
import { Product } from "../models/ProductsModels.js"
import { Router} from "express"
export const router =Router()

router.use('',getAllProducts)
router.use('',createProducts)

export default router