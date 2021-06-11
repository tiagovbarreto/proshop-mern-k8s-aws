import mongoose from 'mongoose'

describe('Mongoose', () => {
  it('test mongoose', async () => {
    const User = mongoose.model('User', new mongoose.Schema({ name: String }))
    const count = await User.count()
    expect(count).toEqual(0)
  })
})
