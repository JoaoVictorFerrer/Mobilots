import { Router } from "express";
import { CitiesController } from "../controller/CitiesController.js";

const router = Router()

router.get('/allcities',CitiesController.getCities)

export default router