# Variables


Podemos utilizar variables dentro de las peticiones que hagamos a GraphQL simplemente definiéndolas con la siguiente sintaxis:

        $nombre: Tipo


- Ejemplo query
```graphql
query($id: ID! = "5e8cfdb31c9d440000137172"){
  getCourse(id: $id){
    _id
    title
    teacher
    description
  }
  
}
```


- Ejemplo mutation. Utilizando la funcion de Query variables del GraphiQL que esta en la parte de abajo

```graphql
mutation addPersonToCourse2 ($course: ID!, $person: ID!){
  addPeople(courseID: $course, personID: $person){
    _id
    title
  }
}
```

```json
{
    "course": "5e8cfdb31c9d440000137172",
	"person": "5e8f8cca77f2723a8c333d5e"
}
```