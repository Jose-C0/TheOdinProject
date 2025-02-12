#!/bin/bash
sqlScript=inventorydb.sql
pathError=error.txt

psql -h localhost -p 5432  -U odin -d inventorydb -c '\dt' 2> /scrips/error.txt

# echo $?
if [ $(wc -l < $pathError) -eq 0  ]
then
  echo 'simplemente no hace hay datos en la bd, y el arhchivo $pathError no va a ser escrito conh el error'
  cat $pathError
else
  mkdir noerror
  echo 'ejecuta el scriptSql porque al archivo $pathError fue redirigido el error '
  psql -h localhost -p 5432  -U odin -d inventorydb -f $sqlScript
fi
