#!/bin/bash
sqlScript=db.sql
pathError=error.txt

psql -h localhost -p $POSTGRES_SERVER_PORT  -U $POSTGRES_USER  -d $POSTGRES_DB  -c '\dt' 2> /scrips/error.txt

# echo $?
if [ $(wc -l < $pathError) -eq 0  ]
then
  echo 'there is simply no data in the database, and the file $pathError is not going to be written with the error'
  cat $pathError
else
  echo 'run the scriptSql because the $pathError file was redirected to the error' 
  psql -h localhost -p $POSTGRES_SERVER_PORT  -U $POSTGRES_USER  -d $POSTGRES_DB  -f $sqlScript
fi

  

