// Ini contoh beberapa tipe data di JavaScript
let nama = "Aulia Putri";       // string
let umur = 16;                  // number
let status = true;              // boolean
let nilaiKosong = null;         // null
let belumDitentukan;            // undefined

// siapin teks hasil tampil
let hasil = "Halo, " + nama + ". Ini beberapa tipe data JavaScript:\n\n";
hasil += "1. Nama (string): " + nama + "\n";
hasil += "2. Umur (number): " + umur + "\n";
hasil += "3. Status (boolean): " + status + "\n";
hasil += "4. Null (nilai null): " + nilaiKosong + "\n";
hasil += "5. Undefined: " + belumDitentukan;

// tampilkan hasil ke elemen HTML
document.getElementById("output").innerText = hasil;
