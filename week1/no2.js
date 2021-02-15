// Soal 2
const mtk = "23";
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

hitung(mtk, bahasaIndonesia, bahasaInggris, ipa);
