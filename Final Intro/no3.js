const divideAndSort = (int) => {
  if (typeof int !== "number") return console.log(`Tipe Data Harus Number`);
  const splitInt = int
    .toString()
    .split("0")
    .map((item) => {
      return item.split("").sort().join("");
    })
    .join("");
  console.log(parseInt(splitInt));
};

divideAndSort(120983921012834);
