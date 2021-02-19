const getNames = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) return reject(new Error("Server Error"));
        return res.json();
      })
      .then((data) => resolve(data))
      .catch(() => {
        reject(new Error("Server Error"));
      });
  });

getNames("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.map((item) => {
      console.log(item.name);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
