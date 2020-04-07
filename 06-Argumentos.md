# Argumentos

Vamos a instalar una nueva dependencia para facilitar el trabajo con GraphQL, vamos a correr el siguiente comando:

        npm i graphql-tools

Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera:

        nombreQuery(campo: tipo): tipo


Dentro del resolver los argumentos de la petición pasarían como segundo parámetro, el primero es root y el segundo es args.


## Configuración

Lo primero es cambiar la forma en la que se importa el schema 

```js
// const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
//...
// definiendo el Schema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})  
```

### Configurar los Resolvers

```js
'use strict'

const courses = [
  {
    _id: '1',
    title: 'title',
    teacher: 'Juan',
    description: 'description',
    topic: 'programming'
  },
  {
    _id: '2',
    title: 'title 1',
    teacher: 'Juan',
    description: 'description',
    topic: 'programming'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    }
  }
}
```

### Definir nuevo Query con argumentos en el Schema

El simbolo de ! indica que el campo es obligatorio

```graphql
type Course {
  _id: ID!
  title: String!
  teacher: String
  description: String!
  topic: String
}

type Query {
  "get All Courses"
  getCourses: [Course]
  "get course by id"
  getCourse(id: ID!): Course
}
```

### Agregar el Resolver

```js
module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    // args son los parametros que llegan por la query
    getCourse: (root, args) =>{
      const course = courses.find(x => x._id === args.id)
      return course
    }
  }
}
```