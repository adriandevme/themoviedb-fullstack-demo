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

- Porque el proxy
- Para el control de la cache
- El plugin de CORS
- Test unitarios y no e2e
- Integracion JWT
