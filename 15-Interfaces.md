# Interfaces

Las interfaces son muy importantes y útiles cuando nos encontramos con tipos de datos similares. Una interfaz nos permite definir un tipo de dato padre que utilizando la palabra implements va a implementar los campos que tenga definidos dentro del tipo de dato que queramos.

En el Schema

```graphql
interface Person {
  _id: ID!
  name: String!
  email: String!
}

type Student implements Person {  
  avatar: String
}

type Monitor implements Person {
  phone: String
}
```
