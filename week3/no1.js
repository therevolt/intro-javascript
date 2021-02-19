const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Penggunaan Then & Catch
cekHariKerja("minggu")
  .then((result) => {
    console.log(`Hari ${result} merupakan hari kerja`);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Penggunaan Try & Catch
(async () => {
  try {
    const cek = await cekHariKerja("minggu");
    console.log(cek);
  } catch (error) {
    console.log(error.message);
  }
})();
