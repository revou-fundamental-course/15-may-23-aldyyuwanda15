function luas() {
    var s = document.getElementsByClassName("sisi-luas").value;

    var hitungLuas = s * s;

    document.getElementsByClassName("output-luas").innerHTML = hitungLuas;
}

function keliling() {
    var sk = document.getElementsByClassName("sisi-keliling");

    var hitungKeliling = 4 * sk;

    document.getElementsByClassName("output-keliling").innerHTML = hitungKeliling;
}