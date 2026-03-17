import { createCart, getAllCart } from "../controllers/cartController.js"
import { Cart } from "../models/CartModels.js"
import { Router} from "express"
export const router =Router()

router.use('',getAllCart)
router.use('',createCart)


export default router