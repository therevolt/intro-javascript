// Latihan Callback Untuk Menampung Hasil Ajax
// Jalankan Di Console Browser Chrome

const mapData = (data) => {
  data.map((item) => {
    console.log(item.title);
  });
};

const getDataAjax = (url, method, callback) => {
  const ajax = new XMLHttpRequest();
  ajax.open(method, url);
  ajax.send();

  ajax.onreadystatechange = function () {
    if (ajax.status === 200) {
      const result = JSON.parse(ajax.responseText);
      callback(result);
    } else {
      console.log(`Server Error!`);
    }
  };
};

getDataAjax("https://jsonplaceholder.typicode.com/posts", "GET", mapData);
