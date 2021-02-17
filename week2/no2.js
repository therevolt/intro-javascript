const callback = () => [
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

const searchName = (string, maxResult, callback) => {
  const arr = callback();
  const newArr = [];
  arr.map((item) => {
    if (item.toLowerCase().match(string) && newArr.length < maxResult) {
      newArr.push(item);
    }
  });
  newArr.length >= 1 ? console.log(newArr) : console.log("Tidak Ada Data Yang Ditemukan");
};

searchName("p", 4, callback);
