// Program 1 : Mengubah Milisecond Ke Second
const convertTime = (timeBefore) => {
  return new Promise((resolve, reject) => {
    if (typeof timeBefore !== "number") return reject(new Error("Parameter Harus Number"));
    if (timeBefore < 1) return reject(new Error("Parameter Harus Lebih Dari 1"));
    const timeAfter = timeBefore / 1000;
    setTimeout(() => {
      resolve(timeAfter);
    }, 2000);
  });
};

// Penggunaan Then & Catch
// convertTime(1000.5)
//   .then((result) => {
//     console.log(`${result} second`);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// console.log(`Program ke-1`);

// Penggunaan Try & Catch
// (async () => {
//   try {
//     const convert = await convertTime(1000);
//     console.log(`${convert} second`);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// ----------------------------------------------------

// Program 2 : Menghitung Keliling Lingkaran
// Rumus Keliling Lingkaran : Pi x Diameter atau 2 x Pi x Jari Jari

const circumference = (value, type) => {
  return new Promise((resolve, reject) => {
    if (typeof value !== "number" || typeof type !== "string")
      return reject(new Error("Tipe Data Parameter Salah"));
    if (value < 1) return reject(new Error("Parameter Harus Lebih Dari 1"));
    // setTimeout(() => {
    if (type === "jari-jari") {
      if (value % 7 === 0) {
        resolve(2 * ((value / 7) * 22));
      } else {
        resolve(2 * (3.14 * value));
      }
    } else if (type === "diameter") {
      if (value % 7 === 0) {
        resolve((value / 7) * 22);
      } else {
        resolve(3.14 * value);
      }
    } else {
      reject(new Error("Parameter Ke-2 Salah"));
    }
    // }, 2000);
  });
};

// Penggunaan Then & Catch
circumference(21, "salah")
  .then((result) => {
    console.log(`Keliling Lingkaran Adalah : ${result}`);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Penggunaan Try & Catch
// (async () => {
//   try {
//     const convert = await circumference(21, "diameter");
//     console.log(`Keliling Lingkaran Adalah : ${convert}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();
