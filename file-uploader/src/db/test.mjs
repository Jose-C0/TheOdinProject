import pg from 'pg';
import 'dotenv/config';

const { Client } = pg;

// Configuración del cliente de PostgreSQL
export const client = new Client({
  host: process.env.HOSTS, // Cambia esto por la IP de la máquina donde está PostgreSQL
  port: process.env.PORT_DB, // Nombre de usuario de PostgreSQL
  user: process.env.USER_DB,
  password: process.env.PASSWORD, // Contraseña del usuario
  database: process.env.DATABASE // Nombre de la base de datos
});

client
  .connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos ');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos', err.stack);
  });
