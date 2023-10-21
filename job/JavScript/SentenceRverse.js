function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];
    for (let i = 0; i < words.length; i++) {
      reversedWords.push(reverseWord(words[i]));
    }
    return reversedWords.join(' ');
  }
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  // Geting user input from the prompt
  const inputSentence = prompt("Enter a sentence:");
  if (inputSentence !== null) {
    const reversedSentence = reverseWordsInSentence(inputSentence);
    alert("Reversed Sentence: " + reversedSentence);
  }
  