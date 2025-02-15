# Inventory management

Inventory management app for an managing groceries. 

Live in render: https://invetory-web.onrender.com/

This project consists in:  

- Setting up a db in PostgreSQL.
- Setting up and querying with node-postgres.
- setting up docker compose.
- Deploy on render.
- Supabase to handle database operations

<!-- TODO: ! -->

- [ ] Form validation, fix code

## Tools

- Express.js
- ES Modules
- EJS
- node.js
- PostgreSQL
- Docker Compose
- HTML, CSS, JavaScript
- Semistandard  

## Screenshots

## Requirements

1. Install dependendencies. (npm install)
2. [Set up environment Variables.](#environment-variables)
3. [Run project using Docker Compose](#Docker-Compose)


## Run project using Docker Compose

Execute the following commands in the path where compose.yml is located  

## Environment Variables
 
To run this project, you will need to add the following environment variables to your .env file

> HOSTS_DB="postgres_server"  
> USER_DB="USER-DB"  
> DATABASE="NAME-OF-DB"  
> PASSWORD="PASSWORD"  
> PORT_DB="5432"  
> IP_NODE_SERVER="localhost"  

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

## Docker commands

| Commands | Comment |
| ------ | ------ |
| docker compose up --watch |  # Create and start containers. Is used to monitor specified file or directory paths on the host machine and automatically update running Docker Compose services when changes are detected. |
| docker compose up --build -d| # builds or re-builds the Docker images for your services and then runs them in detached mode, meaning the containers will run in the background |   
| docker compose up -d |  # Create and start containers ( postgreSQL and adminer inventor-app) |
| docker compose down |   # Stop and remove containers, networks |
| docker compose start |
| docker compose stop |
| docker start NAME-OF-CONTAINER |
| docker stop NAME-OF-CONTAINER |
| docker compose ps | # Shows the status of all containers running|

#### docker compose up paramerts explain

| Parameter | Description |
| ------ | ------ |
| --watch |  Is a feature that allows developers to monitor specified files or directories for changes and automatically update running Docker Compose services based on those changes.|
| --build | The docker-compose --build option is used to rebuild Docker images when you run docker-compose up. This ensures that any changes made to the Dockerfile or the build context are applied. |
| -d      | The docker compose up --detach command starts the containers in the background and leaves them running. This allows you to exit the terminal without stopping the containers. |  
 

## Run Locally

Start the server

```bash
  npm start
```  


## Set up db whit Docker Compose 

You will need to add the following variables to your compose.yml file:

 

## Screenshots

 
## Semistandard  

[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)  

Semistandard is the JavaScript Standard Style on this project

```bash 
npm run formatter # Fix most issues automatically of formatter

semistandard --fix "src/controllers/*.mjs" # You can optionally pass in a directory (or directories) using the glob pattern. 
 
