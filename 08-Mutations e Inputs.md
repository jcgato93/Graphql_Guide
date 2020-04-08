# Mutations e Inputs

Ya hemos visto cómo consultar información mediante GraphQL, pero en un API también vas a necesitar mandar información para que sea almacenada, dentro de GraphQL esto es posible gracias a la especificación mutation.

Un mutation va a requerir de un campo de tipo Input que son como plantillas que le van a indicar qué campos son necesarios para insertar o modificar información.

La sintaxis de una mutation queda de la siguiente manera:

        nombreMutation(input: InputType): tipo

## Agregar el Input en el Schema

```graphql
input CourseInput {
  title: String!
  teacher: String
  description: String!
  topic: String
}

type Mutation {
  "Crea un curso"
  createCourse(input: CourseInput!): Course
}
```

## Crear los Resolvers

en un archivo en /lib/mutations.js

```js
'use strict'

const connectDB = require('./db')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourse = Object.assign(defaults, input)
    let db
    let course
    try {
      db = await connectDB()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      console.error(error)
    }
    return newCourse
  }
}
```

luego se agrega a los resolvers

```js
'use strict'

const queries = require('./queries')
const mutations = require('./mutations')

module.exports = {
  Query: queries,
  Mutation: mutations
}

```