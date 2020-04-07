# Custom Types

Lo primero sera mover el Schema a un archivo aparte con la 
extension .graphql

     /lib/schema.graphql

```graphql
type Query {
  "Retorna un saludo al mundo"
  hello: String
  saludo: String
}
```

Luego para leer un schema desde otra fuente 

```js
const { readFileSync } = require('fs')
const { join } = require('path')

const schema = buildSchema(readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
    ))
```

## Pasar revolvers

Al igual que con el Schema lo ideal es tener los resolvers
en un archivo aparte

        /lib/resolvers.js

```js
module.exports = {
    hello: () => {
        return 'Hola mundo'
    },

    saludo: () => 'Hola a todos'
}
```


## Crear Custom Types

- Schema

```graphql
type Course {
  _id: ID
  title: String
  teacher: String
  description: String
  topic: String
}

type Query {
  "get All Courses"
  getCourses: [Course]
}
```

- Resolvers

```js
'use strict'

module.exports = {
    getCourses: () => {
        return [
            { 
                _id: 'asjdflk',
                title: 'title',
                teacher: 'Juan',
                description: 'description',
                topic: 'programming'
            },
            { 
                _id: 'asasdfaaa',
                title: 'title 1',
                teacher: 'Juan',
                description: 'description',
                topic: 'programming'
            }
        ]
    }
}
```