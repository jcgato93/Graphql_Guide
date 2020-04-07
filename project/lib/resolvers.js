'use strict'

const courses = [
  {
    _id: '1',
    title: 'title',
    teacher: 'Juan',
    description: 'description',
    topic: 'programming'
  },
  {
    _id: '2',
    title: 'title 1',
    teacher: 'Juan',
    description: 'description',
    topic: 'programming'
  }
]

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
