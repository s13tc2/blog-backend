const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstackopen:${password}@cluster0.zwv17.mongodb.net/blogApp?retryWrites=true&w=majority`

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: String
})

const Blog = mongoose.model('Blog', blogSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const blog = new Blog({
        title: 'Blog 4',
        author: 'User 4',
        url: 'www.example.abc',
        likes: '4'
    })

    return blog.save()
  })
  .then(() => {
    console.log('blog saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))