# Schema y Types

El Schema es la base de una API en GraphQL, es el encargado de describir todos los tipos
de información que va a contener.

Dentro de GraphQL contamos con distintos tipos (Types) de datos escalares:

- String
- Int
- Float
- Boolean
- ID

Ademas de los de tipo Object que seria una referencia a un Schema


Para esta Guia se crea un proyecto de ejemplo llamado "project"

1. Instalar npx

        npm i -g npx

2. Crear proyecto

        npx gitignore node && npm init -y

3. Instalar graphql

        npm i graphql


Ejemplo de como crear un Schema

```js
'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el Schema
const schema = buildSchema( `
    type Query {
        helle: String
    }
`);

// Ejecutar el query hello
graphql(schema, '{ hello }').then((data) => {
    console.log(data)
})
```