# Configurar Base de Datos

Para hacer una practica mucho más completa en esta guia 
se utilizara una base de datos de mongodb en mongodb atlas

1. Instalar dotenv, para manejo de variables de entorno evitando
exponer nuestras credenciales

        npm i dotenv

2. Crear archivo .env en el directorio root y otro llamado .env-template solo 
como muestra del nombre de las variables para que otro desarrollador sepa como 
tiene que configurarlo 

3. Agregar dotenv al inicio del index.js

```js
require('dotenv').config()
```

4. Instalar mongodb como dependencia

        npm i mongodb

5. Configurar la base de datos. Crear archivo en 

        /lib/db.js


```js
'use strict'
const MongoClient = require('mongodb').MongoClient;

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
let connection;

async function connectDB () {
    if (connection) return connection

    let client
    try {
        client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        connection = client.db(DB_NAME)
    } catch (error) {
        console.error('Connection error ' + error)
        process.exit(1)
    }

    return connection
}

module.exports = connectDB
```

6. Utilizar la base de datos desde los resolvers 

```js
'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  Query: {
    getCourses: async () => {
      let db, courses = []
      try {
        db = await connectDb()
        courses = await db.collection('courses').find().toArray()
      } catch (error) {
        console.error(error);
      }
      return courses
    },
    // args son los parametros que llegan por la query
    getCourse: async (root, { id }) =>{
      let db;
      let course;      
      try {
        db = await connectDb()
        course = await db.collection('courses').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.error(error);        
      }
      return course
    }
  }
}
```
