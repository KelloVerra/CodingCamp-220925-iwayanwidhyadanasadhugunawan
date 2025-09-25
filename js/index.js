
var namaUser = "";
document.addEventListener('DOMContentLoaded', function () {
    // namaUser = prompt('Masukkan nama anda: ','Guest');
    document.getElementById('headerGreet').innerText = `Hi ${namaUser}, Welcome to the Website`;
})

function validateContactUsForm() {

    document.getElementById('inputNamaError').classList.add("hidden");
    document.getElementById('inputTglLhrError').classList.add("hidden");
    document.getElementById('inputKelaminError').classList.add("hidden");
    document.getElementById('inputPesanError').classList.add("hidden");

    const errorElement = (name, msg) => {
        document.getElementById(name).classList.remove("hidden");
        document.getElementById(name).innerText = msg;
    }
    
    let nama = document.getElementById('inputNama').value;
    let tanggallahir = document.getElementById('inputTglLhr').value;
    let kelamin = document.querySelector('input[type=radio]:checked');
    let pesan = document.getElementById('inputPesan').value;

    if(nama.trim().length == 0) errorElement('inputNamaError','Nama harus diisi');
    if(tanggallahir.trim().length == 0) errorElement('inputTglLhrError','Tanggal Lahir harus diisi');
    if(kelamin === null) errorElement('inputKelaminError','Jenis Kelamin harus diisi');
    if(pesan.trim().length == 0) errorElement('inputPesanError','Pesan harus diisi');
}