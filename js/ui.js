const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class ConsoleInteractor {
  readInput() {
    return prompt('')
  }

  printMessage(message) {
    console.log(message)
  }
}

class TestInteractor {
  getInput(input) {
    return input
  }
}

class UI {
  constructor ({ test = false } = {}) {
    if (test) {
      this.interactor = new TestInteractor()
    } else {
      this.interactor = new ConsoleInteractor()
    }
  }

  mainLoop (inputs = undefined) {
    let count = 0
    let result = []
    while (true) {
      let input = ""
      if (inputs === undefined) {
        input = this.interactor.readInput()
      } else {
        input = this.interactor.getInput(inputs[count])
      }
      if (input === 'quit') {
        break
      }
      const reversed = reverse(input)
      result.push(reversed)
      count++
      if (inputs === undefined) {
        this.interactor.printMessage(reversed)
        if (input === reversed) {
          this.interactor.printMessage('That was a palindrome!')
        }
      } else {
        if (input === reversed) {
          result.push("That was a palindrome!")
        }
      }
    }
    return result
  }
}

module.exports = { UI }