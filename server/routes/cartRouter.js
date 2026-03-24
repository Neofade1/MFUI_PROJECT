import { createCart, deleteCart, getAllCart,getOneCart,updateCart,updateCartStatus} from "../controllers/cartController.js"
import { Cart } from "../models/CartModels.js"
import { Router} from "express"
export const router =Router()

router.post("/", createCart)
router.get("/", getAllCart)
router.get("/:id", getOneCart)
router.put("/:id", updateCart)
router.patch("/:id", updateCartStatus)
router.delete("/:id", deleteCart)


export default router