import { body } from "express-validator";
import { emailExists, usernameExists } from "../helpers/db-validators.js";
import {validarCampos} from "./validar-campos.js"
import {deleteFileOnError} from "./delete-file-on-errors.js"


export const registerValidator = [  
    body("name").not().isEmpty().withMessage("El nombre es requerido"),
    body("surname").not().isEmpty().withMessage("El apellido es requerido"),
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("password").not().isEmpty().withMessage("PASSWORD IS REQUIRED"),
    body("role").not().isEmpty().withMessage("ROLE IS REQUIRED"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validarCampos,
    deleteFileOnError
]

//VALIDACION DEL INICIO DE SESION
export const loginValidator = [
    body("email").optional().isEmail().withMessage("INVALID EMAIL"),
    body("username").optional().isString().withMessage("IVALID USERNAME"),
    body("password").isLength({min:8}).withMessage("LA CONTRASEÑA DEBE CONTENER AL MENOS 8 CARACTERES"),
    validarCampos
]

export const registroEmpresasValidator = [
    body("nombreEmpresa").not().isEmpty().withMessage("El nombre de la empresa es requerido"),
    body("nivelImpacto").not().isEmpty().withMessage("Los años de impactoson requeridos"),
    body("anosTrayectoria").not().isEmpty().withMessage("Los años de trayectoria son requeridos"),
    body("categoriaEmpresarial").not().isEmpty().withMessage("La categoria es requerida"),
    validarCampos
]