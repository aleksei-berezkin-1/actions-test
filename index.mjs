import assert from 'node:assert'
import test from 'node:test'

test.suite('arith tests', () => {
  test('sum which passes', () => {
    assert.strictEqual(1 + 1, 2)
  })
  
  test('mul which fails', () => {
    assert.strictEqual(2 * 2, 5)
  })
})
