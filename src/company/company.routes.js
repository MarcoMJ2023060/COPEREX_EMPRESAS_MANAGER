import { Router } from "express";
import { registroEmpresasValidator } from "../middlewares/validadores.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js";
import { editarEmpresas, filtrarEmpresasPorAnosTrayectoria, listadoEmpresas, listadoEmpresasExcel, listadoEmpresasOrdenado, listadoEmpresasOrdenadoDesc, registroEmpresas } from "./company.controller.js";

const router = Router()

/**
 * @swagger
 * /registerCompany:
 *   post:
 *     summary: Registra una nueva empresa
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la empresa
 *               address:
 *                 type: string
 *                 description: La dirección de la empresa
 *             required:
 *               - name
 *               - address
 *     responses:
 *       201:
 *         description: Empresa registrada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error interno del servidor
 */
//FORMULARIO REGISTRO EMPRESAS
router.post(
    "/registerCompany",
    registroEmpresasValidator,
    deleteFileOnError,
    registroEmpresas
)

/**
 * @swagger
 * /listCompanies:
 *   get:
 *     summary: Lista todas las empresas
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Lista de empresas obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
//LISTADO DE EMPRESAS
router.get("/listCompanies", listadoEmpresas)

/**
 * @swagger
 * /listCompaniesExcel:
 *   get:
 *     summary: Lista todas las empresas en formato Excel
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Lista de empresas en formato Excel obtenida exitosamente
 *       500:
 *         description: Error interno del servidor
 */
//LISTADO DE EMPRESAS POR EXCEL
router.get("/listCompaniesExcel", listadoEmpresasExcel)

/**
 * @swagger
 * /editCompany/{uid}:
 *   put:
 *     summary: Edita una empresa existente
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la empresa
 *               address:
 *                 type: string
 *                 description: La dirección de la empresa
 *             required:
 *               - name
 *               - address
 *     responses:
 *       200:
 *         description: Empresa editada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error interno del servidor
 */
//EDITAR EMPRESA
router.put("/editCompany/:uid", editarEmpresas)

/**
 * @swagger
 * /filterbyyearsofexperience:
 *   get:
 *     summary: Filtra empresas por años de trayectoria
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Empresas filtradas exitosamente
 *       500:
 *         description: Error interno del servidor
 */
//FILTRAR POR AÑOS DE TRAYECTORIA
router.get('/filterbyyearsofexperience', filtrarEmpresasPorAnosTrayectoria);

/**
 * @swagger
 * /listadoA-Z:
 *   get:
 *     summary: Lista empresas ordenadas de A a Z
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Empresas ordenadas de A a Z obtenidas exitosamente
 *       500:
 *         description: Error interno del servidor
 */
//FILTRAR A-Z
router.get("/listadoA-Z", listadoEmpresasOrdenado)

/**
 * @swagger
 * /listadoZ-A:
 *   get:
 *     summary: Lista empresas ordenadas de Z a A
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: Empresas ordenadas de Z a A obtenidas exitosamente
 *       500:
 *         description: Error interno del servidor
 */
//FILTRAR Z-A
router.get("/listadoZ-A", listadoEmpresasOrdenadoDesc)

export default router