import mongoose from "mongoose";
import Company from "./company.model.js";

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
        const {limite = 5, desde = 0} = req.query
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