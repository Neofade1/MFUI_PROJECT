import { Client } from "../models/clientModel.js"
import { Router} from "express"
import { getAllClients,createClient,getOneClient } from "../controllers/clientContoller.js"
export const router =Router()

router.get('',getAllClients)
router.get('/:id', getOneClient)
router.post('',createClient)
export default router