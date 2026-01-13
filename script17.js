function cekAngka() {
    let input = document.getElementById('angka').value;
    let angka = Number(input);

    // validasi input
    if (input === "") {
        console.log("Isi dulu angkanya ya!");
        return;
    }

    if (isNaN(angka)) {
        console.log("Input bukan angka!");
        return;
    }

    // percabangan if
    if (angka > 0) {
        console.log("Yayy, angka positif");
    } else if (angka < 0) {
        console.log("Waduh, angka minus");
    } else {
        console.log("Hmm, nol");
    }
}
