const palindrom = (text) => {
  const newText = [];
  for (let i = text.length - 1; i >= 0; i--) {
    newText.push(text[i]);
  }
  if (text.toLowerCase() === newText.join("").toLowerCase()) {
    console.log(`${text} adalah palindrom`);
  } else {
    console.log(`${text} bukan palindrom`);
  }
};

palindrom("siang");
palindrom("Malam");
