# Alias y fragments

Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder identificarlas, esto es posible gracias a los Aliases o simplemente Alias.

La sintaxis desde el grapqhiQL de un Alias es bastante simple:

```js
nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}
```
Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los Fragments.


```graphql

{
    # Alias
 	AllCourses: getCourses {
    # Uso del fragment
  	    ...CourseFileds
	}
  
  Course1: getCourse(id:"5e8cfdb31c9d440000137172"){
    ...CourseFileds
    teacher
  }
  
  Course2: getCourse(id:"5e8cfe151c9d440000137173"){
    ...CourseFileds
    topic
  }
}

fragment CourseFileds on Course {
  _id
  title
  description
}
```