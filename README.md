# 🏢 COPEREX_EMPRESAS_MANAGER 🏢
ESTA API ESTA DISEÑADA PARA GESTIONAR EMPRESAS Y CLIENTES QUE DESEEN PARTICIPAR EN INTERFER

## 🔑 VARIABLES DE ENTORNO 🔑

CREE UN ARCHIVO `.env` EN EL DIRECTORIO RAIZ Y AÑADA LAS SIGUIENTES VARIABLES:

```
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

## 🚀 PRERREQUISITOS 🚀

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14+ recomendado)
- [npm](https://www.npmjs.com/) (viene incluido con NodeJS)

## 🔧 INSTALACIÓN 🔧

Sigue estos pasos para configurar el proyecto localmente:

1. **Crea una carpeta local** (donde quieras almacenar el proyecto)
   ```cmd
   mkdir nombre-carpeta  
2. **Navega a la carpeta recién creada**
    ```cmd
   cd nombre-carpeta
3. **Clona el repositorio**
    ```cmd
   git clone <ENLAREREPOSITORIODEGITHUB>
4. **Accede al directorio del proyecto clonado**
   ```cmd
   cd nombre-del-proyecto
5. **Abrir codigo fuente del proyecto clonado, dentro del directorio ejecutar el comando**
   ```cmd
   code .
6. **Instala las dependencias**
    ```cmd
   npm i
7. **Iniciar proyecto en modo desarrollo**
    ```cmd
    npm run dev

## 🌐 ENDPOINTS DE LA API 🌐

- 📝 **REGISTRAR ADMINISTRADOR/ADMINISTRADORES** 📝
  - **URL:** `/empresasManager/v1/auth/registerusers`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
    "name":"string",
    "surname":"string",
    "username":"string",
    "email":"string",
    "password":"string",
    "role":"string"
    }
    ```

     - 🔓 **INICIO SESION** 🔓
  - **URL:** `/empresasManager/v1/auth/login`
  - **Método:** `POST`
  - **Cuerpo:**
    ```json
    {
      "email":"string",
      "username":"string",
      "password":"string"
    }
    ```

     ### 💼 EMPRESAS 💼

    - 📋 **FORMULARIO EMPRESAS** 📋
  - **URL:** `/empresasManager/v1/company/registerCompany`
  - **Método:** `POST`
 - **Cuerpo:**
    ```json
    {
    "nivelImpacto":"string",
    "anosTrayectoria":"string",
    "categoriaEmpresarial":"string",
    "nombreEmpresa":"string"
    }
    ```

    - ➤ **LISTADO EMPRESAS** ➤
  - **URL:** `/empresasManager/v1/company/listCompanies`
  - **Método:** `GET`

    - ✏️ **EDITAR EMPRESAS** ✏️
  - **URL:** `/empresasManager/v1/company/editCompany/:uid`
  - **Método:** `PUT`
  - **Cuerpo:**
    ```json
    {
    "nombreEmpresa":"string",
    "nivelImpacto":"string",
    "anosTrayectoria":"string",
    "categoriaEmpresarial":"string"
    }
    ```

       - ✏️ **FILTRO EMPRESAS** ✏️
  - **URL:** `/empresasManager/v1/company/filtroEmpresas`
  - **Método:** `GET`
  - **PARAMETROS:**
     - **URL:** `http://localhost:3001/empresasManager/v1/company/filtroEmpresas?anosTrayectoria=numero` BUSCA POR AÑOS DE TRAYECTORIA
      - **URL:** `http://localhost:3001/empresasManager/v1/company/filtroEmpresas?orden=asc` BUSCA POR ORDEN A-Z
      - **URL:** `http://localhost:3001/empresasManager/v1/company/filtroEmpresas?orden=desc` BUSCA POR ORDEN Z-A
    ```
    
  - 𝄜👉 **LISTADO EMPRESAS EN EXCEL** 👈𝄜
  - **URL:** `/empresasManager/v1/company/listCompaniesExcel`
  - **Método:** `GET`
  - LISTA TODO EL REGISTRO DEEMPRESAS EN NUESTRO EXCEL 
   - GUARDAR LA RESPUESTA DEL ENDPOINT EN UN ARCHIVO Y PONERLE ".xlsx"
   -  ![image](https://github.com/user-attachments/assets/92243472-1b96-4f5a-af57-caa1bc014077)
     - SAVE RESPONDE TO FILE
      - ![image](https://github.com/user-attachments/assets/ad6fb23b-3a2a-4f09-8d79-564761418bd0)
    
        -GUARDAR EN EL PROYECTO O DONDE GUSTES.

    
        ## 🛣️🌐 RUTAS GENERALES DE LA API 🛣️🌐
  - **REGISTRAR ADMINISTRADOR/ADMINISTRADORES**
  - **URL:** `http://localhost:3001/empresasManager/v1/auth/registerusers`
  - **INICIO SESION ADMINS**
  - **URL:** `http://localhost:3001/empresasManager/v1/auth/login`
  - **FORMULARIO EMPRESAS**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/registerCompany`
  - **LISTADO EMPRESAS**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/listCompanies`
  - **EDITAR EMPRESAS**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/editCompany/:uid`
  - **LISTADO EMPRESAS EN EXCEL**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/listCompaniesExcel`
  - **FILTRO EMPRESAS**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/filtroEmpresas`

  ## 📬 Contacto 📬
  Si necesitas ayuda o tienes alguna pregunta sobre el proyecto, no dudes en contactarnos:

  - 👨🏻‍💼 **Desarrollador principal**: 👨🏻‍💼  
 [MARCO](https://github.com/MarcoMJ2023060)

## 📱 **Redes Sociales**: 📱
- **📍 Sígueme**
╰┈➤ [𝕏 Twitter](https://twitter.com/pg16_16_)  
╰┈➤ [📸 Instagram](https://instagram.com/pg16_16_)  
╰┈➤ [ⓕ Facebook](https://facebook.com/MarcoMartinez)  
