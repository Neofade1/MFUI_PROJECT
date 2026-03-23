import { createCart, getAllCart,getOneCart,updateCart,updateCartStatus} from "../controllers/cartController.js"
import { Cart } from "../models/CartModels.js"
import { Router} from "express"
export const router =Router()

router.get('',getAllCart)
router.get('/:id', getOneCart)
router.post('',createCart)
router.get('',updateCart)
router.get('',updateCartStatus)


export default router