import assert from 'node:assert'
import test from 'node:test'

const pleasePass = process.argv.includes('--pleasePass')

test.suite('arith tests', () => {
  test('one plus one', () => {
    assert.strictEqual(1 + 1, 2)
  })
  
  test('two by two', () => {
    assert.strictEqual(2 * 2, pleasePass ? 4 : 5)
  })
})
