// Operasi Logika JavaScript

// nilai awal
let nilaiA = true;
let nilaiB = false;

// operasi AND (&&)
let hasilAND = nilaiA && nilaiB;
console.log("Hasil AND (true && false):", hasilAND);

// operasi OR (||)
let hasilOR = nilaiA || nilaiB;
console.log("Hasil OR (true || false):", hasilOR);

// operasi NOT (!)
let hasilNOT = !nilaiA;
console.log("Hasil NOT (!true):", hasilNOT);

// contoh penggunaan logika dalam kondisi
let umur = 18;
let punyaKTP = true;

let bolehMasuk = umur >= 17 && punyaKTP;
console.log("Boleh masuk:", bolehMasuk);
