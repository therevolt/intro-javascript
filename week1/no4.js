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
data = {
  ...data,
  name: "Rama Seftiansyah",
  email: "ramaseftiansyah12@gmail.com",
  hobby: "ngoding",
};
// console.log(data);

//b
const {
  address: { street: jalan, city: kota },
} = data;
console.log(address);
