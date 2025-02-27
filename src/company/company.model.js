import { Schema, model } from "mongoose";

const companySchema = Schema({
    nivelImpacto:{
        type: String,
        required:[true, "NIVEL DE IMPACTO ES OBLIGATORIO"],
        maxLength: [50, "NOMBRE NO PUEDE EXCEDER DE 50 CARACTERES"]
    },
    anosTrayectoria:{
        type: String,
        required:[true, "AÑOS TRAYECTORIA ES OBLIGATORIO"],
        maxLength: [10, "AÑOS DE TRAYECTORIA NO PUEDE EXCEDER DE 10 CARACTERES"]
    },
    categoriaEmpresarial:{
        type: String,
        required:[true, "CATEGORIA EMPRESARIAL ES OBLIGATORIO"],
        maxLength: [25, "CATEGORIA EMPRESARIAL NO PUEDE EXCEDER DE 25 CARACTERES"]
    },
    nombreEmpresa:{
        type: String,
        required:[true, "NOMBRE DE LA EMPRESA ES OBLIGATORIO"],
        maxLength: [50, "NOMBRE NO PUEDE EXCEDER DE 50 CARACTERES"]
    },
    estado: {
        type: Boolean,
        default: true
    }
})

export default model("Company", companySchema)