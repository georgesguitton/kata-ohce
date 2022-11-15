const test = require('tape')
const { ohce } = require('../ohce')

test('main loop', (t) => {
  t.plan(1)
  t.deepEquals(ohce(["hello", "oto", "quit"]), ["olleh", "oto", "That was a palindrome!"])
  t.end()
})