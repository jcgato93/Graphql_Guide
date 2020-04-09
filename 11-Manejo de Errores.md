# Manejo de Errores

Si sucede un error al momento de realizar una petición GraphQL nos va a retornar un objeto llamado errors que contendrá la información del error y su mensaje. Podemos configurar el mensaje que le retorne al usuario simplemente con una función que lance un error con el mensaje que queramos.

1. Crear el archivo /lib/errorHandler.js

```js
'use strict'

function errorHandler (error) {
    console.error(error)
    throw new Error('Fallo en la operacion del servidor')
}

module.exports = {
    errorHandler
}
```


2. Agregar la funcion a las queries y los mutations en los try catch

```js
const errorHandler = require('./errorHandler')

 getCourses: async () => {
    let db
    let courses = []

    try {
      db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return courses
  }
```