# File Uploader  

In this project, we’ll be building a stripped down version of Google Drive (or any other personal storage service).  

[ ] Resolver bugs.  
[ ] Fix old code.  
[ ] Delete files that i will not use.  

Commands:
```sh
npm i
npx prisma migrate dev --name init 
npx prisma generate #
```

| Commaned      | Description  |
| ------------- | ------------- |
| `npx prisma generate` | Reads your Prisma schema and enerates Prisma Client code. The code is generated into the node_modules/.prisma/client folder by default. |  
| `npx prisma migrate dev --name init` |  |
| ` ` |  |


## Prisma

https://www.prisma.io/docs/orm/prisma-schema/overview

Method of configuration for your Prisma ORM setup. It consists of the following parts:  

1. **Data sources**: Specify the details of the data sources Prisma ORM should connect to (e.g. a PostgreSQL database)  

2. **Generators**: Specifies what clients should be generated based on the data model (e.g. Prisma Client)  

3. **Data model definition**: Specifies your application models (the shape of the data per data source) and their relations  

It is typically a single file called `schema.prisma` (or multiple files with `.prisma` file extension) that is stored in a defined but customizable location.

Whenever a prisma command is invoked, the CLI typically reads some information from the schema, e.g.:  

1. **prisma generate**: Reads all above mentioned information from the Prisma schema to generate the correct data source client code (e.g. Prisma Client).  

2. **prisma migrate dev**: Reads the data sources and data model definition to create a new migration.  




 ## Steps

1. Run in mi pc run  `npm i` to install dependencies.  

Este comando generara un package-lock.json que luego sera copiado al contenedor app-file-uploader. El Dockerfile se encargara de instalara las mismas dependencias que tengo localmente dentro de mi contenedor.  

2. Setup your .env file like .envExample.  

3. Run `docker compose up --watch` o `docker compose up -d`  

El compose.yml, contine todo lo necesario para correr el proyecto (postgres, prisma stuido, node.js)  

4. En src/db/prisma/schema.prisma asegurate de especificar: Data Source, Generator, Data Model

- Data Source, 
- Generator, 

- Data Model, https://www.prisma.io/docs/orm/prisma-migrate/getting-started

1. Create the first migration:  

```prisma
prisma migrate dev --name init
```  


######
Crea el schema.prisma en --> src/db/prisma/schema.prisma   

```prisma
npx prisma generate
```  
El prisma generate el comando lee su esquema Prisma y genera Código del cliente de Prisma. El código es generado en el node_modules/.prisma/client carpeta por defecto.

Now you can start sending queries via the generated Prisma Client API

### migrations

Crear la primera migración:
prisma migrate dev --name init

### Docker 

En caso de no contar con los archivos necesarios (prisma, generated):

- Este projecto esta hecho para que primero hagas el `npm install` en tu maquina local.  

- Despues ejecuta el contenedor `docker compose up` o  `docker compose up --watch`.  

- Al final, en tu maquina local haces las migraciones `npx 
prisma migrate dev --name init ` para generar los archivos necesarios.  


TODO:
Cuando si tengo los archivos necesarios (prisma, generated)...   


