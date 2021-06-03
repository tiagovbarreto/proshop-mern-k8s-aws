import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log('Mongo_URI = ' + process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
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
