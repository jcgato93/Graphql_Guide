# Queries y Resolvers

Una query permite ejecutar una peticion al API, dentro de una query debes indicar la
consulta que quieres ejecutar y los campos que deseas obtener. GraphQL te va 
a devolver la información que solicitaste dentro del objeto "data".

El resultado de una petición no se va a ejecutar de manera mágica, para ello se debe 
definir el objeto resolvers, este objeto va a contener una propiedad del mismo nombre que
la query que va a resolver o ejecutar.

Ejemplo 

```js
'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el Schema
const schema = buildSchema( `
    type Query {
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

// Ejecutar el query hello
graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
    console.log(data)
})
```