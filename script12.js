function latihanSatu() {
    const hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = "";

    // Input dari user
    let nama = prompt("Masukkan nama kamu:");
    let umur = prompt("Masukkan umur kamu:");
    let masihSekolah = confirm("Apakah kamu masih sekolah?");

    // Ubah umur ke number
    umur = parseInt(umur);

    // Cek input umur
    if (isNaN(umur) || umur <= 0) {
        alert("Umur tidak valid!");
        return;
    }

    // Penentuan status pelajar
    let status;
    if (masihSekolah && umur >= 7) {
        status = "Pelajar aktif";
    } else if (!masihSekolah && umur >= 7) {
        status = "Bukan pelajar aktif";
    } else {
        status = "Belum usia sekolah";
    }

    // Tampilkan hasil
    hasilDiv.innerHTML = `
        <strong>Nama:</strong> ${nama} <br>
        <strong>Umur:</strong> ${umur} tahun <br>
        <strong>Status:</strong> ${status}
    `;
}
