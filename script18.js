function cekNamaElseIf() {
    let input = document.getElementById('nama').value;

    // ubah ke huruf kecil dan hapus spasi depan belakang
    let nama = input.toLowerCase().trim();

    if (nama === "") {
        console.log("Tolong masukkan nama dulu!");
    } else if (nama === "anty") {
        console.log("Halo Anty!");
    } else if (nama === "gemes") {
        console.log("Hai Gemes!");
    } else if (nama === "anty cantik") {
        console.log("Wow, Anty Cantik!");
    } else {
        console.log("Nama tidak dikenali, coba lagi!");
    }
}

function cekNamaSwitch() {
    let input = document.getElementById('nama').value;
    let nama = input.toLowerCase().trim();

    switch (nama) {
        case "":
            console.log("Tolong masukkan nama dulu!");
            break;
        case "anty":
            console.log("Halo Anty!");
            break;
        case "gemes":
            console.log("Hai Gemes!");
            break;
        case "anty cantik":
            console.log("Wow, Anty Cantik!");
            break;
        default:
            console.log("Nama tidak dikenali, coba lagi!");
            break;
    }
}
