import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

// May require additional time for downloading MongoDB binaries
//jest.setTimeout(60000)

let mongoServer = null

beforeAll(async () => {
  await makeMongoMemoryServer()
})

beforeEach(async () => {
  await deleteCollections()
})

afterAll(async () => {
  await destroyMongoMemoryServer()
})

async function deleteCollections() {
  const collections = await mongoose.connection.db.collections()

  for (let collection of collections) {
    await collection.deleteMany({})
  }
}

async function destroyMongoMemoryServer() {
  await mongoose.disconnect()
  await mongoServer.stop()
}

async function makeMongoMemoryServer() {
  mongoServer = new MongoMemoryServer()
  const mongoUri = await mongoServer.getUri()
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
