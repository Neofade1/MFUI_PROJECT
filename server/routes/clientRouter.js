import { Client } from "../models/clientModel.js"
import { Router} from "express"
import { getAllClients,createClient,getOneClient,updateClient,updateClientStatus, deleteClient } from "../controllers/clientContoller.js"
import { deleteCart } from "../controllers/cartController.js"
export const router =Router()

router.post("/", createClient)
router.get("/", getAllClients)
router.get("/:id", getOneClient)
router.put("/:id", updateClient)
router.patch("/:id", updateClientStatus)
router.delete("/:id", deleteClient)
export default router