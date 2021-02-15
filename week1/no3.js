// Soal 3
const num = 10;

const printSegitiga = (num) => {
  if (typeof num === "number") {
    for (let i = num; i >= 1; i--) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += `${j}`;
      }
      console.log(str);
    }
  } else {
    console.log(`Data harus number`);
  }
};

// Contoh Benar
printSegitiga(num);
