import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const NODE_ENV = process.env.NODE_ENV
const NODE_PORT = process.env.NODE_PORT

app.listen(
  NODE_PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${NODE_PORT} ...`)
)
