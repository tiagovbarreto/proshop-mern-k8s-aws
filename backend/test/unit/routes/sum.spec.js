import sum from '../../../src/routes/sum.js'

test('adds 1 + 2 to equal 13', () => {
  expect(sum(1, 2)).toBe(3)
})
