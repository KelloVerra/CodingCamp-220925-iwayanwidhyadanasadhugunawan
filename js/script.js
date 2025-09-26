
var namaUser = "";
document.addEventListener('DOMContentLoaded', function () {
    namaUser = prompt('Masukkan nama anda: ','');
    namaUser = namaUser.trim().length > 0 ? ` ${namaUser}` : '';
    document.getElementById('headerGreet').innerHTML = `Hi${namaUser}, <br> Ready to <span class="text-[#6933FF]">Quantum-Enhance</span> your future?`;
})

function validateContactUsForm() {

    let error = false;
    document.getElementById('inputNamaError').classList.add("hidden");
    document.getElementById('inputTglLhrError').classList.add("hidden");
    document.getElementById('inputKelaminError').classList.add("hidden");
    document.getElementById('inputPesanError').classList.add("hidden");

    const errorElement = (name, msg) => {
        error = true;
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

    if(error) return;

    alert(`Thanks for your feedback, ${nama}!`);
}