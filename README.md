# COPEREX_EMPRESAS_MANAGER
ESTA API ESTA DISEÑADA PARA GESTIONAR EMPRESAS Y CLIENTES QUE DESEEN PARTICIPAR EN INTERFER

## VARIABLES DE ENTORNO

CREE UN ARCHIVO `.env` EN EL DIRECTORIO RAIZ Y AÑADA LAS SIGUIENTES VARIABLES:

```
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

## ENDPOINTS DE LA API

- **REGISTRAR ADMINISTRADOR/ADMINISTRADORES**
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

     - **INICIO SESION**
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

     ### EMPRESAS

    - **FORMULARIO EMPRESAS**
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

    - **LISTADO EMPRESAS**
  - **URL:** `/empresasManager/v1/company/listCompanies`
  - **Método:** `GET`

    - **EDITAR EMPRESAS**
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

  - **FILTRAR POR AÑOS DE TRAYECTORIA**
  - **URL:** `/empresasManager/v1/company/filterbyyearsofexperience`
  - **Método:** `GET`
   - **PARAMS:**
   ![image](https://github.com/user-attachments/assets/66b60e01-fb33-47eb-a72a-545bfc9b840d)
 
  - **LISTADO A-Z**
  - **URL:** `/empresasManager/v1/company/listadoA-Z`
  - **Método:** `GET`

    - **LISTADO Z-A**
  - **URL:** `/empresasManager/v1/company/listadoZ-A`
  - **Método:** `GET`

  - **LISTADO EMPRESAS EN EXCEL**
  - **URL:** `/empresasManager/v1/company/listCompaniesExcel`
  - **Método:** `GET`
   - GUARDAR LA RESPUESTA DEL ENDPOINT EN UN ARCHIVO Y PONERLE ".xlsx"
   -  ![image](https://github.com/user-attachments/assets/92243472-1b96-4f5a-af57-caa1bc014077)
     - SAVE RESPONDE TO FILE
      - ![image](https://github.com/user-attachments/assets/ad6fb23b-3a2a-4f09-8d79-564761418bd0)
    
        -GUARDAR EN EL PROYECTO O DONDE GUSTES.

    
        ## RUTAS GENERALES DE LA API
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
  - **FILTRAR POR AÑOS DE TRAYECTORIA**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/filterbyyearsofexperience`
  - **LISTADO A-Z**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/listadoA-Z`
  - **LISTADO Z-A**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/listadoZ-A`
  - **LISTADO EMPRESAS EN EXCEL**
  - **URL:** `http://localhost:3001/empresasManager/v1/company/listCompaniesExcel`
