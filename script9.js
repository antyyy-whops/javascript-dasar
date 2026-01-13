// Tipe data number
let angka1 = 10;      // bilangan bulat
let angka2 = 3.14;    // bilangan desimal

// Operasi aritmatika
let tambah = angka1 + angka2;
let kurang = angka1 - angka2;
let kali = angka1 * angka2;
let bagi = angka1 / angka2;
let sisa = angka1 % angka2;

// Konversi string ke number
let textNumber = "25";
let hasilConvert = Number(textNumber);

// Gagal konversi
let gagalConvert = Number("halo");

// Menampilkan ke halaman
let hasil = `
Angka 1 = ${angka1} <br>
Angka 2 = ${angka2} <br><br>

Tambah = ${tambah} <br>
Kurang = ${kurang} <br>
Kali = ${kali} <br>
Bagi = ${bagi} <br>
Sisa Bagi = ${sisa} <br><br>

Convert "25" = ${hasilConvert} <br>
Convert "halo" = ${gagalConvert}
`;

document.getElementById("hasil").innerHTML = hasil;
