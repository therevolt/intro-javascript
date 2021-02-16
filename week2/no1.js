// [1] Method toString()
// Merubah Value Menjadi String
// Return Dari Method Ini Adalah Value String

// Contoh
const num = 1000;
const newNum = num.toString();
// console.log(typeof newNum);

const boolean = true;
const newBoolean = boolean.toString();
// console.log(typeof newBoolean);

// -------------------------------------------------

// [2] Method indexOf()
// Mencari Index Sebuah Value Dalam Array
// Return Dari Method Ini Adalah Sebuah Index Array
// Jika Tidak Ketemu Maka Returnnya Adalah -1

// Contoh
const data = ["contoh1", "contoh2", "contoh3"];
let str = "contoh2";
const index = data.indexOf(str);
// console.log(`Data '${str}' berada di index ${index}`);

// -------------------------------------------------

// [3] Method length
// Menghitung Jumlah/Panjang String
// Return Dari Method Ini Adalah Number Dari Jumlah String
// Method Ini Hanya Berfungsi Untuk Tipe Data String
// Selain Itu Akan Me-return Undefined

// Contoh
const string = "saya belajar javascript";
const lengthString = string.length;
// console.log(`${string}
// Memiliki Panjang Sebesar : ${lengthString}`);

// -------------------------------------------------

// [4] Method replace()
// Mengganti Suatu Nilai Ke Nilai Baru Yang Sudah Di Tentukan
// Dengan Mencari Berdasarkan String Atau Regular Expression (regex)

// Contoh
const sentence = "saya belum merubah ini";
const regex = /belum/gi; //g adalah global dan i adalah insensitive
const sentenceFinal = sentence.replace(regex, "sudah");
// console.log(sentenceFinal);

// -------------------------------------------------

// [5] Method match()
// Sedikit Sama Dengan Replace
// Tetapi Method match() Ini Tidak Merubah Nilai Apapun
// Hanya Mencocokan Dan Me-return Nilai Yang Cocok Dalam Bentuk Array

// Contoh
const sentenceMatch = "saya mencari ini";
const regexMatch = /mencari/gi;
const sentenceMatchFinal = sentenceMatch.match(regexMatch);
// console.log(sentenceMatchFinal);

// -------------------------------------------------

// [6] Method split()
// Memisahkan Suatu Nilai Dengan Nilai
// Return Dari Method Ini Adalah Array

// Contoh
const wordSplit = "telkomindonesia";
const finalSplit = wordSplit.split("");
// console.log(finalSplit);

// -------------------------------------------------

// [7] Method toUpperCase()
// Merubah Seluruh String Menjadi Huruf Kapital
// Method Ini Hanya Berfungsi Di Tipe Data String

// Contoh
const wordsLower = "huruf ini akan berubah";
const wordsUpper = wordsLower.toUpperCase();
// console.log(wordsUpper);

// -------------------------------------------------

// [8] Method reverse()
// Membalik Posisi Array, Dari Akhir Menjadi Awal
// Dan Awal Menjadi Akhir

// Contoh
const arr = ["pertama", "kedua", "ketiga", "keempat"];
const reverseArr = arr.reverse();
// console.log(reverseArr);

// -------------------------------------------------

// [9] Method toLowerCase()
// Merubah Seluruh String Menjadi Huruf Kecil
// Method Ini Hanya Berfungsi Di Tipe Data String

// Contoh
const wordUpper = "HURUF";
const wordLower = wordUpper.toLowerCase();
// console.log(wordLower);

// -------------------------------------------------

// [10] Method push()
// Menambahkan Nilai Baru Ke Array

const array = ["ini", "akan"];
array.push("bertambah");
// console.log(array);

// -------------------------------------------------
