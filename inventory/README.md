# Inventory management

Inventory management app for an managing groceries. 

Live in render: https://invetory-web.onrender.com/

This project consists in:  

- Setting up a db in PostgreSQL.
- Setting up and querying with node-postgres.
- setting up docker compose.
- Deploy on render.
- Supabase to handle database operations

## Tools

- Express.js
- ES Modules
- EJS
- node.js
- PostgreSQL
- Docker Compose
- HTML, CSS, JavaScript
- Semistandard  


## Requirements

1. Install dependendencies. (npm install)
2. [Set up environment Variables.](#environment-variables)
3. [Run project using Docker Compose](#Run-project-using-Docker-Compose)


## Environment Variables
 
To run this project, you will need to add the following environment variables to your .env file

> HOSTS_DB="postgres_server"  
> USER_DB="USER-DB"  
> DATABASE="NAME-OF-DB"  
> PASSWORD="PASSWORD"  
> PORT_DB="5432"  
> IP_NODE_SERVER="localhost"  

## Run project using Docker Compose

Execute the following commands in the path where compose.yml is located  

```bash
docker compose up --watch  # Create and start containers.
docker compose stop  # Stop services
```
To see more information about [docker commands.](./README.Docker.md)

## Dockerfile on folder scirpts/  

This is what the Dockerfile in the scripts/ folder does:

1. Copy the scripts to the postgres server.

2. dbIsEmpty.sh - Check if the database has created tables. 

```bash 
psql -h localhost -p 5432  -U odin -d inventorydb -c '\dt' 2> /scrips/error.txt
```  

3. The DB is created IN CASE THE DB DOESN'T EXIST 

```bash 
psql -h localhost -p 5432  -U odin -d inventorydb -f $sqlScript
```  

–h # is host name  
-p # is port number  
-d # is database name  
-U # is for user name  
-f # path to script sql  


## Run Locally

Start the server

```bash
  npm start
```  



## Semistandard  

[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)  

Semistandard is the JavaScript Standard Style on this project

```bash 
npm run formatter # Fix most issues automatically of formatter

semistandard --fix "src/controllers/*.mjs" # You can optionally pass in a directory (or directories) using the glob pattern. 
 
