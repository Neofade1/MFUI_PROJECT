import { createProducts, getAllProducts,getOneProducts,updateProduct,updateProductStatus } from "../controllers/productControler.js"
import { Product } from "../models/ProductsModels.js"
import { Router} from "express"
export const router =Router()

router.get('',getAllProducts)
router.get('/:id', getOneProducts)
router.post('',createProducts)
router.get('',updateProduct)
router.get('',updateProductStatus)

export default router