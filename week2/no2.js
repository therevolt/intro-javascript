const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (string, maxStr, callback) => {
  const arr = callback();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().match(string) && newArr.length < maxStr) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};

searchName("bi", 3, () => names);
