import express from 'express'

import { errorHandler, notFound } from './middleware/error-middleware.js'

import { productRoutes } from './routes/product-routes.js'

const app = express()

app.get('/', (req, res) => {
  res.send('API is running ...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
