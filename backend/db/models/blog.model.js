const mongoose = require('mongoose')
const slugify = require('slugify')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = { Blog }
