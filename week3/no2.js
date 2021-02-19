const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found!"));
    }
  }, 4000);
};

const callback = (err, data) => {
  if (!err) {
    data.map((item) => {
      console.log(item);
    });
  } else {
    console.log(err.message);
  }
};

getMonth(callback);
