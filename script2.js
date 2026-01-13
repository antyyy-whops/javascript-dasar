
// ---- VAR ----
// var bisa dideklarasikan ulang
var nama = "Aulia Putri";
console.log("Nama menggunakan var:", nama);

// kita bisa redeclare var
var nama = "Aulia P.";
console.log("Nama setelah redeclare var:", nama);

// ---- LET ----
// let digunakan untuk variabel yang dapat berubah
let umur = 15;
console.log("Umur awal menggunakan let:", umur);

// ubah nilainya
umur = 18;
console.log("Umur setelah diubah:", umur);

// ---- CONST ----
// const digunakan untuk nilai yang tetap
const sekolah = "SMK";
console.log("Sekolah menggunakan const:", sekolah);

// jika kita coba ubah const, akan error
// sekolah = "SMA"; // akan error

// ---- Contoh gabungan ----
console.log("Halo, nama saya " + nama + " dan saya berumur " + umur + " tahun.");
