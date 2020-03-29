const connection = require('../../src/database/connection')
const request = require('supertest')
const app = require('../../src/app')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })
  afterEach(async () => {
    await connection.destroy()
  })
  it('should be able to create a new ONG', async () => {
    const res = await request(app)
      .post('/ongs')
      // .set('Authorization', 'ongId')
      .send({
        name: 'ong-test',
        email: 'ot@gmail.com',
        whatsapp: '1111111111',
        city: 'tb',
        uf: 'sc'
      })
    expect(res.body).toHaveProperty('id')
    expect(res.body.id).toHaveLength(8)
  })
})
