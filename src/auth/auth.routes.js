import { Router } from "express";
import { registrarUsuario, login } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/validadores.js";

const router = Router()

router.post(
    "/registerusers",
    registerValidator, 
    registrarUsuario
)

router.post(
    "/login",
    loginValidator,
    login
)

export default router