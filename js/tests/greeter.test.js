const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  const midnightGreeter = new Greeter().greet(0)
  t.equal(midnightGreeter,"Good night")
  t.end()
})

test('should never return undefined', (t) => {
  const greeter = new Greeter()

  for(i=0;i<24;i++){
    t.notDeepEqual(greeter.greet(i),undefined)
  }
  t.notDeepEqual(greeter.greet("lol"),undefined)
  t.end()
})
