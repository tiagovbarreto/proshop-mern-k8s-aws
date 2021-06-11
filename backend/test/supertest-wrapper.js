import supertest from 'supertest'
import app from '../src/app'

const hook =
  (method = 'post') =>
  (args) =>
    supertest(app)[method](args)

const request = {
  post: hook('post'),
  get: hook('get'),
  put: hook('put'),
  delete: hook('delete'),
}

export default request
