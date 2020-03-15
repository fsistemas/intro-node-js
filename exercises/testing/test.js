const {fixId} = require('./users')

// write some tests
describe('users', () => {
  test('fixId', () => {
      expect(fixId("100")).toBe(100)
  })
})
