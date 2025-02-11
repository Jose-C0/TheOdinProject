# Inventory management

Inventory management app for an managing groceries.

This project consists in:  

- Setting up a db in PostgreSQL.  
- Setting up and querying with node-postgres.
  
<!-- TODO: ! -->

- [ ] In the dockerfile create the database and insert tables and data, using postgreSQL. Don't forget to mention it in README.md

8. [ ] Deploy it and show off what you’ve done!

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
[![js-semistandard-style](https://raw.githubusercontent.com/standard/semistandard/master/badge.svg)](https://github.com/standard/semistandard)

## Requirements
1. Install dependendencies. (npm install)

2. [Set up db with Docker Compose](#Set-up-db-whit-Docker-Compose)

3. Create datebase and insert data ([psql](#create-database-and-insert-data-with-psql)
 or [via script](#create-database-and-insert-data-with-javascript))  

4. [Set up environment Variables.](#environment-variables)
 

## Run Locally

Start the server

```bash
  npm run start
```  

Execute the following commands in the path where compose.yml is located  

```bash
docker start NAME-OF-CONTAINER
docker stop NAME-OF-CONTAINER
docker compose start
docker compose stop
docker compose ps     # Shows the status of all containers
docker compose up --watch # Create and start containers ( postgreSQL and adminer inventor-app)  
docker compose up --build -d # Create and start containers ( postgreSQL and adminer inventor-app)  
docker compose up -d  # Create and start containers ( postgreSQL and adminer inventor-app)  
docker compose down   # Stop and remove containers, networks
```

## Set up db whit Docker Compose 

You will need to add the following variables to your compose.yml file:

```yml
services:  

```

## Create database and insert data with psql  

if you are running a docker container the following command helps you to enter the container:  

```bash
docker exec -it db-postgres_server-1 psql -h localhost -U NAMEUSER -d odin
```

Enter the PostgreSQL shell by running psql
\l - you can view the current dbs  

```bash
CREATE DATABASE top_users;
```

\l again to see if the db was created. Now let’s connect to the db:

```bash
\c top_users
```

Verify that the psql prompt should be:  

```bash
top_users=#
```

Now create a table and its columns to store username data:  

```sql
CREATE TABLE usernames (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 )
);
```

Verify that the table has been created by running \d

```sql
INSERT INTO usernames (username)
VALUES ('Mao'), ('nevz'), ('Lofty');
```

## Create Database and insert data with JavaScript

You can then run this script via node db/populatedb.js

```javascript
node db/populatedb.js
```
or add it as a script in package.json and run:

```bash
npm run populatedb
```

## Environment Variables
 
To run this project, you will need to add the following environment variables to your .env file

> HOSTS=IP  
> USER_DB="username"  
> DATABASE="top_users"  
> PASSWORD=""  
> PORT=Number_of_port  


## Screenshots

<img src="images/listofusers.jpg" width="800"  height=300>  

<img src="images/newuser.jpg" width="800"  height=300>

### PostgreSQL comands
 
### Project structure  

.

## Semistandard  

Semistandard is the JavaScript Standard Style on this project

```bash 
npm run formatter # Fix most issues automatically of formatter

semistandard --fix "src/controllers/*.mjs" # You can optionally pass in a directory (or directories) using the glob pattern. 
 
