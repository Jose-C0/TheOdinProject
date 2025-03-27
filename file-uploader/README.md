# File Uploader  

In this project, we’ll be building a stripped down version of Google Drive (or any other personal storage service).  

[ ] Resolver bugs.  
[ ] Fix old code.  
[ ] Delete files that i will not use.  

## Tools

- Express.js  
- Node.js  
- PostgreSQL  
- Docker Compose  
- HTML, CSS, JavaScript
- Prisma ORM

## Requirements  

- Have installed docker, node.  

Case 1: I have prisma/schema.prisma with my client and schema defined:  

1. Install dependenicas on your local machine `npm install`.  

2. [Set up environment Variables](#environment-variables)  

3. [Run project using Docker Compose](#docker-compose)  

4. On your local machine run: `npx prisma migrate dev --name init`.  

## Environment Variables  

**IMPORTANT**: In the root of the project create the files `.env` and `.env.prod`.    

Make it as similar as possible to the .enExample for the .env and .env.prodExample for .env.prod  

.env -->> is for running the project locally.  

.env.prod -->> is for the container to identify the DB host. This file has in the connection string postgres_server_db as the database host.  

Docker needs to be passed the service name in order to connect to the DB.  

## Docker commands  

To run the container run:  

```sh
docker compose up --watch
```  

Official documentation: https://www.prisma.io/docs/guides/docker  

**note**: I made some changes in the compose.yml  

## Prisma

Commands:  

```sh
npx prisma migrate dev --name init 
```    

TODO:
When i don`t have file necessary (prisma, generated)...

## Semistandard  

[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)  

Semistandard is the JavaScript Standard Style on this project.  

```bash 
npm run formatter # Fix most issues automatically of formatter

semistandard --fix "src/controllers/*.mjs" # You can optionally pass in a directory (or directories) using the glob pattern. 
```  

