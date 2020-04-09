# Directivas

Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo:

        @include(if: Boolean) {
            datos
        }


Ejemplo usando el graphiQL

```graphql
query getPeopleData($people: Boolean!){
  getCourses{
    title    
    people @include(if: $people){
      _id
      name
      email
    }
  }
}
```

tambien se puede utilizar la funcion de @skipe
```graphql
query getPeopleData($people: Boolean!){
  getCourses{
    title    
    people @skipe(if: $people){
      _id
      name
      email
    }
  }
}
```