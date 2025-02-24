import { Router } from "express";
import { registroEmpresasValidator } from "../middlewares/validadores.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js";
import { editarEmpresas, filtrarEmpresasPorAnosTrayectoria, listadoEmpresas, listadoEmpresasOrdenado, listadoEmpresasOrdenadoDesc, registroEmpresas } from "./company.controller.js";

const router = Router()

//FORMULARIO REGISTRO EMPRESAS
router.post(
    "/registerCompany",
    registroEmpresasValidator,
    deleteFileOnError,
    registroEmpresas
)

//LISTADO DE EMPRESAS
router.get("/listCompanies", listadoEmpresas)

//EDITAR EMPRESA
router.put("/editCompany/:uid", editarEmpresas)

//FILTRAR POR AÑOS DE TRAYECTORIA
router.get('/filterbyyearsofexperience', filtrarEmpresasPorAnosTrayectoria);

//FILTRAR A-Z
router.get("/listadoA-Z", listadoEmpresasOrdenado)

//FILTRAR Z-A
router.get("/listadoZ-A", listadoEmpresasOrdenadoDesc)

export default router