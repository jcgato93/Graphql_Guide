# Nested Types

Una caracteristica de graphql es que permite tener una relacion entre los tipos 
de una forma muy sencilla.

- En este ejemplo el type Course tiene un array de type Student
```graphql
type Course {
  _id: ID!
  title: String!
  teacher: String
  description: String!
  topic: String
  people: [Student]
}

type Student {
  _id: ID!
  name: String!
  email: String!
}
```

- En los Mutations

```js
 addPeople: async (root, { courseID, personID }) => {
    let db
    let person
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({
        _id: ObjectID(courseID)
      })
      person = await db.collection('students').findOne({
        _id: ObjectID(personID)
      })

      if (!course || !person) throw new Error('La Persona o el Curso no existe')

      await db.collection('courses').updateOne(
        { _id: ObjectID(courseID) },
        { $addToSet: { people: ObjectID(personID) } }
      )
    } catch (error) {
      console.error(error)
    }

    return course
  }
```