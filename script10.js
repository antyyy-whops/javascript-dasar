// Tipe data Boolean: true atau false
let benar = true;
let salah = false;

// Menampilkan hasil
let text = "";

// Menulis Boolean ke dalam text
text += "Nilai benar = " + benar + "<br>";
text += "Nilai salah = " + salah + "<br><br>";

// Contoh ekspresi
let nilaiSiswa = 75;
let lulus = nilaiSiswa >= 70; // true kalau nilai >= 70

text += "Nilai siswa: " + nilaiSiswa + "<br>";
text += "Apakah lulus? " + lulus + "<br><br>";

// Contoh dengan logika AND / OR
let punyaIzin = true;
let absen = false;

let bisaMasuk = punyaIzin && absen;
let bolehUlang = punyaIzin || absen;

text += "Punya Izin: " + punyaIzin + "<br>";
text += "Absen: " + absen + "<br>";
text += "Bisa masuk kelas? " + bisaMasuk + "<br>";
text += "Boleh ulang materi? " + bolehUlang + "<br>";

// Tampilkan ke halaman
document.getElementById("output").innerHTML = text;
 