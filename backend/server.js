import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'

import { productRoutes } from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/products', productRoutes)

const NODE_ENV = process.env.NODE_ENV
const NODE_PORT = process.env.NODE_PORT

app.listen(
  NODE_PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${NODE_PORT} ...`)
)
