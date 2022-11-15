const test = require('tape')
const { ohce } = require('../ohce')
const { UI } = require('../ui')

test('main loop', (t) => {

  const ui = new UI({test: true})

  const result = ui.mainLoop(["hello", "oto", "quit"])

  t.deepEqual(result, ["olleh", "oto", "That was a palindrome!"])
  t.end()
})