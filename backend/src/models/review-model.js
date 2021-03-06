import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    review: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)

export default reviewSchema 
