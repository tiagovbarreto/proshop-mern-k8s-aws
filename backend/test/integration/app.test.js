import request from '../supertest-wrapper'

describe('App', () => {
  it('should return 200 in app root', async () => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
  })

  it('should return 404 if invalid route is provided', async () => {
    const res = await request.get('/invalid-route')
    expect(res.status).toBe(404)
  })
})
