import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import app from '../src/server.js'

let server
let mongo

beforeEach(() => {})
afterEach(async () => {
  await Genre.deleteOne({})
  await server.close()
})

beforeAll(async () => {
  //jest.setTimeout(30000);

  server = require('')

  process.env.JWT_KEY = 'asdfasdf'

  mongo = new MongoMemoryServer()
  const mongoUri = await mongo.getUri()

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()

  for (let collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await mongo.stop()
  await mongoose.connection.close()
})
