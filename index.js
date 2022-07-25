const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

// require('dotenv').config()
// const express = require('express')
// const app = express()
// const Blog = require('./models/blog')

// const requestLogger = (request, response, next) => {
//   console.log('Method:', request.method)
//   console.log('Path:  ', request.path)
//   console.log('Body:  ', request.body)
//   console.log('---')
//   next()
// }

// app.use(express.json())
// app.use(requestLogger)

// app.post('/api/blogs', (request, response) => {
//   const body = request.body
//   console.log(body)

//   if (!body.title || !body.author || !body.url || !body.likes) {
//     return response.status(400).json({
//       error: 'title, author, url, or likes missing'
//     })
//   }

//   const blog = new Blog({
//     title: body.title,
//     author: body.author,
//     url: body.url,
//     likes: body.likes
//   })

//   blog.save().then(savedBlog => {
//     response.json(savedBlog)
//   })
//     .catch(error => next(error))
// })

// app.get('/api/blogs', (request, response) => {
//   Blog.find({}).then(blog => {
//     response.json(blog)
//   })
// })

// app.get('/api/blogs/:id', (request, response, next) => {
//   Blog.findById(request.params.id).then(blog => {
//     if (blog) {
//       response.json(blog)
//     } else {
//       response.status(404).end()
//     }
//   })
//     .catch(error => next(error))
// })

// app.put('/api/blogs/:id', (request, response, next) => {
//   const { title, author, url, likes } = request.body

//   Blog.findByIdAndUpdate(
//     request.params.id,
//     { title, author, url, likes },
//     { new: true, runValidators: true, context: 'query' }
//   )
//     .then(updatedBlog => {
//       response.json(updatedBlog)
//     })
//     .catch(error => next(error))
// })

// app.delete('/api/blogs/:id', (request, response, next) => {
//   Blog.findByIdAndRemove(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message })
//   }

//   next(error)
// }

// // this has to be the last loaded middleware.
// app.use(errorHandler)


// const PORT = process.env.PORT || 3003
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })