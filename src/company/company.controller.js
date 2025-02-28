import mongoose from "mongoose";
import Company from "./company.model.js";
import ExcelJS from "exceljs";

export const registroEmpresas = async (req, res) =>{
    try{

        const data  = req.body
        const company  = await Company.create(data);
 
        return res.status(201).json({
            message: "REGISTRO EMPRESAS HA SIDO CREADO",
            nombreEmpresa: company.nombreEmpresa,
            nivelImpacto: company.nivelImpacto,
            anosTrayectoria: company.anosTrayectoria,
            categoriaEmpresarial: company.categoriaEmpresarial
        })
    }catch(e){
        return res.status(500).json({
            message: "FALLO EN EL REGISTRO DEL ESTUDIANTE",
            error: e.message
        });
    }
}

export const listadoEmpresas = async (req, res) =>{
    try{
        const {limite = 10, desde = 0} = req.query
        const query = {estado: true}
        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            companies
        })
    }catch(err){
        return res.status(500).json({
            success: false, 
            message: "ERROR AL OBTENER LAS EMPRESAS",
            error: err.message
        })
    }
}

export const editarEmpresas = async (req, res) => {
    const { uid } = req.params; 
    const { nombreEmpresa, nivelImpacto, anosTrayectoria, categoriaEmpresarial} = req.body; 
    try {
        const company = await Company.findById(uid);
        if (!company) {
            return res.status(404).json({
                    message: 'Empresa no encontrada' 
                    });
        }
        if (nombreEmpresa) company.nombreEmpresa = nombreEmpresa;
        if (nivelImpacto) company.nivelImpacto = nivelImpacto;
        if (anosTrayectoria) company.anosTrayectoria = anosTrayectoria;
        if (categoriaEmpresarial) company.categoriaEmpresarial = categoriaEmpresarial;
        await company.save();
        const companyToReturn = company.toObject();
        delete companyToReturn.anosTrayectoria;
        res.status(200).json({
            success: true,
            message: 'Empresa actualizada correctamente',
            company: companyToReturn
        })
    } catch (err) {
            return  res.status(500).json({ 
            success: false,
            message: "ERROR AL EDITAR LA EMPRESA",
            error: err 
        });
    }
}

/*
export const filtrarEmpresasPorAnosTrayectoria = async (req, res) => {
    try {
        const { limite = 7, desde = 0, anosTrayectoria } = req.query;
        
        const query = { estado: true };
        if (anosTrayectoria) {
            query.anosTrayectoria = anosTrayectoria;
        }
        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            companies
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER LA EMPRESA",
            error: err.message
        })
    }
}

export const listadoEmpresasOrdenado = async (req, res) => {
    try {
        const { limite = 7, desde = 0 } = req.query;
        const query = { estado: true };
        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                .sort({ categoriaEmpresarial: 1 }) // Ordenar por categoriaEmpresarial de A-Z
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            companies
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER LAS EMPRESAS",
            error: err.message
        });
    }
};

export const listadoEmpresasOrdenadoDesc = async (req, res) => {
    try {
        const { limite = 7, desde = 0 } = req.query;
        const query = { estado: true };
        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                .sort({ categoriaEmpresarial: -1 }) // Ordenar por categoriaEmpresarial de Z-A
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            companies
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER LAS EMPRESAS",
            error: err.message
        });
    }
};
*/

export const filtroEmpresas = async (req, res) => {
    try {
        const { limite = 10, desde = 0, anosTrayectoria, orden } = req.query;
        
        // Construir el query base
        const query = { estado: true };

        if (anosTrayectoria) {
            query.anosTrayectoria = anosTrayectoria.toString();
        }

        // Determinar el ordenamiento
        let sortOption = {};
        if (orden === 'asc') {
            sortOption = { categoriaEmpresarial: 1 };
        } else if (orden === 'desc') {
            sortOption = { categoriaEmpresarial: -1 };
        }

        // Ejecutar consultas en paralelo
        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                .sort(sortOption)
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            companies
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER LAS EMPRESAS",
            error: err.message
        });
    }
};

export const listadoEmpresasExcel = async (req, res) => {
    try {
        const { limite = 10, desde = 0 } = req.query;
        const query = { estado: true };

        const [total, companies] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query).skip(Number(desde)).limit(Number(limite))
        ]);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Empresas');

        worksheet.columns = [
            { header: 'Nombre de la Empresa', key: 'nombreEmpresa', width: 30 },
            { header: 'Nivel de Impacto', key: 'nivelImpacto', width: 20 },
            { header: 'Años de Trayectoria', key: 'anosTrayectoria', width: 20 },
            { header: 'Categoría Empresarial', key: 'categoriaEmpresarial', width: 25 },
            { header: 'Estado', key: 'estado', width: 15 },
        ];

        companies.forEach(empresa => {
            worksheet.addRow({
                nombreEmpresa: empresa.nombreEmpresa,
                nivelImpacto: empresa.nivelImpacto,
                anosTrayectoria: empresa.anosTrayectoria, // ¡Corrige el typo aquí! (anosTrayectoria vs. anosTrayectoria)
                categoriaEmpresarial: empresa.categoriaEmpresarial,
                estado: empresa.estado ? 'Activo' : 'Inactivo',
            });
        });

        // Configura los headers ANTES de enviar la respuesta
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            `attachment; filename=empresas.xlsx`
        );

        // Escribe el archivo en la respuesta
        await workbook.xlsx.write(res);

        // No uses res.end() o res.json() después de write()
        return res; 

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER LAS EMPRESAS",
            error: err.message,
        });
    }
};