import { deleteProduct } from "../controllers/cartController.js"
import { createProducts, getAllProducts,getOneProducts,updateProduct,updateProductStatus } from "../controllers/productControler.js"
import { Product } from "../models/ProductsModels.js"
import { Router} from "express"
export const router =Router()

router.post("/", createProducts)
router.get("/", getAllProducts)
router.get("/:id", getOneProducts)
router.put("/:id", updateProduct)
router.patch("/:id", updateProductStatus)
router.delete("/:id", deleteProduct)

export default router