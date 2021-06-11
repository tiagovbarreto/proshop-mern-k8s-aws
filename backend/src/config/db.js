import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    let mongoURI = null

    mongoURI = process.env.MONGO_URI

    console.log(`Mongo_URI = ${mongoURI}`)
    const conn = await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error to connect to MongoDB: ${error}`)
    process.exit(1)
  }
}

export default connectDB
