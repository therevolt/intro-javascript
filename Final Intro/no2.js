const reverseWords = (words) => {
  const wordSplit = words.split(" ");
  const newWords = [];
  for (let i = wordSplit.length - 1; i >= 0; i--) {
    newWords.push(wordSplit[i]);
  }
  console.log(newWords.join(" "));
};

reverseWords("Saya tidur malam");
