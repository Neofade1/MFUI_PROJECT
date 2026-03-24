import { createOrder, getAllOrder,updateOrder,updateOrderStatus,getOneOrder, deleteOrder } from "../controllers/orderController.js"
import { Order } from "../models/orderModels.js"
import { Router} from "express"
export const router =Router()

router.post("/", createOrder)
router.get("/", getAllOrder)
router.get("/:id", getOneOrder)
router.put("/:id", updateOrder)
router.patch("/:id", updateOrderStatus)
router.delete("/:id", deleteOrder)

export default router