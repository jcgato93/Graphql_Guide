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