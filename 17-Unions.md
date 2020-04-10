# Unions

Unions permite agrupar varios custom types sin importar si tienen algo en común, su sintaxis es la siguiente:

        union SearchResult = CustomType1 | CustomType2 | CustomType3

Al momento de realizar una query que retorna una union podemos identificar el tipo de dato solicitando el campo __typename.

Ejemplo

- Crear la union en el Schema 

```graphql
union GlobalSearch = Course | Student

type Query {
  "........ other queries"

  "Ejecuta una busqueda global"
  searchItems(keyword: String!): [GlobalSearch]  
}
```

- Agregar a los types

```js
 GlobalSearch: {
    __resolveType: (item, context, info) => {
      if(item.title) {
        return 'Course'
      }

      return 'Student'
    }
  }
```

- Agregar a las queries 

```js
searchItems: async (root , { keyword }) => {
    let db
    let items
    let courses
    let students

    try {
      db = await connectDb()
      courses = await db.collection('courses')
                .find({ title: {'$regex' : keyword, '$options' : 'i'}})
                .toArray()

      students = await db.collection('students')
                      .find({ name: {'$regex' : keyword, '$options' : 'i'}})
                      .toArray()

      items = [...courses, ...students]                      
    } catch (error) {
      errorHandler(error)
    }
    return items
  }
```


## Realizar la consulta desde el graphiQL

```graphql
{
  searchItems(keyword: "t"){
    __typename
    "Cuando sea de tipo Course"
    ...on Course{
      _id
      title
    }
    "Cuando sea de tipo Student"
    ...on Student{
      _id
      name
    }
  }
}
```