const reverse = (s) => s.split('').reverse().join('')

const ohce = (words) => {  
  const reversedWords = []
  words.forEach(word => {
    if (word === "quit") {
      return
    }
    const reversedWord = reverse(word)
    if (reversedWord === word) {
      reversedWords.push(reversedWord, "That was a palindrome!")
    } else {
      reversedWords.push(reversedWord)
    }
  })
  return reversedWords
}

module.exports = { ohce }
