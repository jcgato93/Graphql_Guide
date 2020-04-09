# Resolver de tipos

GraphQL necesita de un resolver para el tipo de dato padre y una función para el campo del nested type para poder extraer su información.

En el caso de "Course" que tiene un array de "Student" se tiene que preparar para que el resolver 
pueda responder a los campos de "Student" (people)

1. Crear un resolver de tipo en un archivo aparte  /lib/types.js

```js
'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
    Course: {
        // people contiene  el array de id de students
        people: async ({ people }) => {
            let db;
            let peopleData ;
            let ids;
            try {
                db = await connectDb()
                ids = people ? people.map(id => ObjectID(id)) : []
                peopleData = ids.length > 0 ?
                    await db.collection('students').find(
                        {_id: { $in: ids } }
                        ).toArray() 
                        : []
                    
            } catch (error) {
                console.error(error)
            }

            return peopleData
        }
    }
}
```