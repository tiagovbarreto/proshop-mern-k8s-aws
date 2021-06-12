import request from '../../supertest-wrapper'

const makeGetProducts = (url = '/api/products') => {
  return request.get(url)
}

describe('Products API', () => {
  it('should return an empty array if no products', async () => {
    const res = await makeGetProducts('/api/products')
    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('should return 500 if invalid produc id is provided', async () => {
    const res = await makeGetProducts('/api/products/1')
    expect(res.status).toBe(500)
  })

  it('should return 404 if produc is not found', async () => {
    const id = '80bedaadecdc14003ac05ff9'
    const res = await makeGetProducts(`/api/products/${id}`)
    expect(res.status).toBe(404)
  })
})
