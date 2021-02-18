const valueSelection = (valueOne, valueTwo, arr) => {
  if (typeof valueOne !== "number" || typeof valueTwo !== "number")
    return console.log("Tipe Data Harus Number");
  if (arr.length < 5) {
    console.log("Array Harus Lebih Dari 5");
  } else if (valueOne < valueTwo) {
    const selectionArr = [];
    arr.map((value) => {
      if (value >= valueOne && value <= valueTwo) {
        selectionArr.push(value);
      }
    });
    console.log(
      selectionArr.length > 0 ? selectionArr.sort() : "Jumlah angka dalam dataArray tidak ada"
    );
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
};

valueSelection(1, 5, [2, 25, 4, 1, 90]);
