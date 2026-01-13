// Contoh belajara JavaScript untuk pemula

// Membuat variabel dengan nama Aulia dan Puri
let nama1 = "Aulia";
let nama2 = "Putri";

// Tipe data number
let usiaAulia = 16;
let usiaPutri = 15;

// Penjumlahan usia (hanya contoh operasi)
let totalUsia = usiaAulia + usiaPutri;

// Boolean sederhana
let sudahBerlatih = true;

// Menyiapkan tampilan teksnya
let text = "";

// Menampilkan nama dan usia
text += "Nama 1: " + nama1 + "<br>";
text += "Usia " + nama1 + " = " + usiaAulia + "<br><br>";

text += "Nama 2: " + nama2 + "<br>";
text += "Usia " + nama2 + " = " + usiaPutri + "<br><br>";

// Operasi aritmatika
text += "Total usia Aulia + Putri = " + totalUsia + "<br><br>";

// Contoh Boolean
text += "Sudah berlatih JavaScript? " + sudahBerlatih + "<br><br>";

// Contoh perbandingan
let lebihTua = usiaAulia > usiaPutri;
text += "Apakah " + nama1 + " lebih tua dari " + nama2 + "? " + lebihTua;

// Tampilkan semua ke halaman
document.getElementById("result").innerHTML = text;
