const generateUnique = require('../../src/utils/generateUniqueId')
describe('Generate unique ID', () => {
  it('should generate a unique ID', () => {
    // expect(1 + 1).toBe(2)
    const id = generateUnique()
    expect(id).toHaveLength(8)
  })
})
