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