import { Router } from "express"
import { HourCityController } from "../controller/HourCityController.js"


const router = Router()

router.post('/hourcity',HourCityController.getHour)

export default router