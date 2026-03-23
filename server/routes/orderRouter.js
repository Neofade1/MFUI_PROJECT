import { createOrder, getAllOrder,updateOrder,updateOrderStatus,getOneOrder } from "../controllers/orderController.js"
import { Order } from "../models/orderModels.js"
import { Router} from "express"
export const router =Router()

router.get('',getAllOrder)
router.get('/:id', getOneOrder)
router.post('',createOrder)
router.get('',updateOrder)
router.get('',updateOrderStatus)

export default router