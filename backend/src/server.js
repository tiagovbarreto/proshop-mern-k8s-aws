import dotenv from 'dotenv'

import app from './app.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const NODE_ENV = process.env.NODE_ENV
const NODE_PORT = process.env.NODE_PORT

app.listen(
  NODE_PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${NODE_PORT} ...`)
)
