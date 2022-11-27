# TheMovieDB Fullstack Demo

Aplicacion demo para buscar y listar películas. La demo incluye:

- Cliente web con 2 vistas básicas con un buscador de películas y el detalle de la película. Utiliza la base de datos de [The Movie Database](https://www.themoviedb.org/). Desarrollado con Angular(v15)
- Cliente servidor, que actúa de proxy para el acceso a la base de datos de The Movie Database. Desarrollado con NodeJS(v18) y Fastify completamente en Typescript.

## Ejecutar

Aunque el entorno no ha sido testado en producción, puede ejecutarse siguiendo los pasos

```bash
# Instalar y ejecutar aplicacion servidora
cd ./server
copy ./.env.sample ./.env # Editar el archivo .env con los valores de configuracion necesarios.
npm install
npm start
# Instalar y ejecutar aplicacion cliente
cd ./client
npm install
ng serve
```

Para mas detalles de como correr test, ejecutar en modo desarrollo, etc, ver los respectivos ficheros Readme de [cliente](https://github.com/adriandevme/themoviedb-fullstack-demo/blob/master/client/README.md) y [servidor](https://github.com/adriandevme/themoviedb-fullstack-demo/tree/develop/server).

## Decisiones de diseño

- El servidor utiliza la librería [Fastify](https://github.com/fastify/fastify) debido a que su uso está orientado a APIs, además de tener plena compatibilidad con Typescript.
- De cara a tener mayor flexibilidad de cara a posibles refactorizaciones, utiliza la libreria [node-fetch](https://github.com/node-fetch/node-fetch) en el servidor para realizar las llamadas a la API y tratar los objetos, en lugar de usar un plugin como [@fastify/reply-from](https://github.com/fastify/fastify-reply-from) para que haga de proxy completo.
- El servidor utiliza el plguin [@fastify/caching](https://github.com/fastify/fastify-caching) , que permite deshabilitar la cache como ejemplo. Esto permite gestionar la politica de cache del cliente desde el servidor.
- El servidor permite habilitar el uso de CORS para todas las rutas mediante el plugin [@fastify/cors](https://github.com/fastify/fastify-cors). Configurable por parametro
- Tanto la aplicacion servidora como el cliente contienen diferentes test unitarios. Puesto que es un proyecto demo, no hay implementados ningún test de integración.
- Ya que no hay gestión de usuarios ni login, la solución no incluye securización de ningun tipo. Podría implementarse mediante [autenticacion JWT](https://jwt.io/introduction) fácilmente con plugins como [@auth0/angular-jwt](https://www.npmjs.com/package/@auth0/angular-jwt) y [@fastify/jwt](https://github.com/fastify/fastify-jwt)
