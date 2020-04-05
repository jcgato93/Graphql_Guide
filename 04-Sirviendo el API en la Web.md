# Sirviendo la API en la Web

Ya viste que la API  funciona a través de la línea de comandos con el comando
"node index.js", pero necesitamos que está funcione dentro de la 
web, para ello necesitas de las dependencias de "express" y un middleware de GrapQL


1. Instalar dependencias

        npm i express express-graphql

2. Para evitar el proceso de detener nuestro servidor cada que ejecutamos un nuevo 
cambio, vamos a utilizar la dependencia de desarrollo Nodemon:

        npm i -D nodemon


# Configurar nodemon

En el archivo package.json en la seccion de scripts

```js
"scripts": {
    "dev": "nodemon -e js,graphql index",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```
Con esta configuracion solo se debe correr el comando "npm run dev" y 
iniciara el servidor, y cada vez que se cambie el contenido de un archivo
se reiniciara de forma automatica

# Crear servidor con Express y agregar el Middleware

```js
'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express();
const port = process.env.port || 3000

// definiendo el Schema
const schema = buildSchema( `
    type Query {
        "Retorna un saludo al mundo"
        hello: String,
        saludo: String
    }
`);

// Configurar los resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },

    saludo: () => 'Hola a todos'
}

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localshost:${port}/api`);
})
```