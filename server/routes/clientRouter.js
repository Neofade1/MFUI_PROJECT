import { Client } from "../models/clientModel.js"
import { Router} from "express"
import { getAllClients,createClient,getOneClient,updateClient,updateClientStatus } from "../controllers/clientContoller.js"
export const router =Router()

router.get('',getAllClients)
router.get('/:id', getOneClient)
router.post('',createClient)
router.get('',updateClient)
router.get('',updateClientStatus)
export default router