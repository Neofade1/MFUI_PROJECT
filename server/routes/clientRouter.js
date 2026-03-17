import { Client } from "../models/clientModel.js"
import { Router} from "express"
import { getAllClients,createClient } from "../controllers/clientContoller.js"
export const router =Router()

router.use('',getAllClients)
router.use('',createClient)

export default router