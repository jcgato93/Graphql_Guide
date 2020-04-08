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