// Latihan Promise
// Jalankan Di Console Browser Chrome

const getData = (url, method) =>
  new Promise((resolve, reject) => {
    if (typeof url !== "string" || typeof method !== "string")
      return reject(new Error("Data Harus String"));
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        reject(new Error(`${ajax.status} : Server Error`));
      }
    };
  });

getData("https://jsonplaceholder.typicode.com/posts", "GET")
  .then((result) => {
    result.map((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
