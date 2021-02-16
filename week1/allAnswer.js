// Soal 1
const biodata = {
  name: "Rama Seftiansyah",
  age: 21,
  hobbies: ["ngoding", "nonton", "gaming"],
  IsMaried: false,
  schoolList: [
    {
      name: "MI AL-MABRUROH",
      yearIn: 2005,
      yearOut: 2011,
      major: null,
    },
    {
      name: "SMPN 10 TANGERANG",
      yearIn: 2011,
      yearOut: 2014,
      major: null,
    },
    {
      name: "SMK YP KARYA 2 TANGERANG",
      yearIn: 2014,
      yearOut: 2017,
      major: "Teknik Komputer dan Jaringan",
    },
  ],
  skills: [
    {
      skillName: "NodeJS",
      level: "advanced",
    },
    {
      skillName: "ReactJS",
      level: "beginner",
    },
    {
      skillName: "MySQL",
      level: "beginner",
    },
    {
      skillName: "ExpressJS",
      level: "beginner",
    },
    {
      skillName: "PhotoShop",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};

// console.log(biodata);

// Soal 2
const mtk = 78;
const bahasaIndonesia = 20;
const bahasaInggris = 99;
const ipa = 90;

const hitung = (nilai1, nilai2, nilai3, nilai4) => {
  if (nilai1 && nilai2 && nilai3 && nilai4) {
    const nilaiRataRata = (nilai1 + nilai2 + nilai3 + nilai4) / 4;
    if (nilaiRataRata <= 100 && nilaiRataRata >= 0) {
      console.log(`Rata rata = ${nilaiRataRata}
Grade = ${
        nilaiRataRata <= 59
          ? "E"
          : nilaiRataRata <= 69
          ? "D"
          : nilaiRataRata <= 79
          ? "C"
          : nilaiRataRata <= 89
          ? "B"
          : nilaiRataRata <= 100 && "A"
      }`);
    } else {
      console.log("Tipe Data/Nilai Yang Di Input Salah");
    }
  } else {
    console.log("Seluruh Nilai Harus Diisi");
  }
};

// hitung(mtk, bahasaIndonesia, bahasaInggris, ipa);

// Soal 3
const num = 10;

const printSegitiga = (num) => {
  if (typeof num === "number") {
    for (let i = num; i >= 0; i--) {
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

// printSegitiga(num);

// Soal 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

//a
const a = {
  ...data,
  name: "Rama Seftiansyah",
  email: "ramaseftiansyah12@gmail.com",
  hobby: "ngoding",
};
// console.log(a);

//b
const {
  address: { street: jalan, city: kota },
} = data;
// console.log(`Jalan : ${jalan}
// Kota : ${kota}`);
