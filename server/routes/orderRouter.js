import { createOrder, getAllOrder } from "../controllers/orderController.js"
import { Order } from "../models/orderModels.js"
import { Router} from "express"
export const router =Router()

router.use('',getAllOrder)
router.use('',createOrder)

export default router