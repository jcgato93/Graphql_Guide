'use strict'


module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    // args son los parametros que llegan por la query
    getCourse: (root, args) =>{
      const course = courses.find(x => x._id === args.id)
      return course
    }
  }
}
