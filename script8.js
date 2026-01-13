function submitNama() {
    let nama = document.getElementById("namaInput").value;

    if (nama == "") {
        document.getElementById("hasil").innerText =
            "Nama belum diisi";
    } else {
        document.getElementById("hasil").innerText =
            "Halo, " + nama + ". Selamat datang";
    }
}
