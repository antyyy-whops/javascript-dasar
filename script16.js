function hitung() {
    var a = Number(document.getElementById("angka1").value);
    var b = Number(document.getElementById("angka2").value);
    var output = "";

    output += "Penjumlahan: " + (a + b) + "<br>";
    output += "Pengurangan: " + (a - b) + "<br>";
    output += "Perkalian: " + (a * b) + "<br>";
    output += "Pembagian: " + (a / b) + "<br>";
    output += "Sisa Bagi (Modulus): " + (a % b) + "<br>";

    document.getElementById("hasil").innerHTML = output;
}
