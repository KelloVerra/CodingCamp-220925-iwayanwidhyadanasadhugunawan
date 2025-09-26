
var namaUser = "";
document.addEventListener('DOMContentLoaded', function () {
    namaUser = prompt('Enter your name: ','');
    namaUser = namaUser.trim().length > 0 ? ` ${namaUser}`.slice(0,25) : '';
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

    if(nama.trim().length == 0) errorElement('inputNamaError','Name had to be filled');
    if(tanggallahir.trim().length == 0) errorElement('inputTglLhrError','Birthdate had to be filled');
    if(kelamin === null) errorElement('inputKelaminError','Gender had to be filled');
    if(pesan.trim().length == 0) errorElement('inputPesanError','Message had to be filled');

    if(error) return;

    alert(`Thanks for your message, ${nama}!`);
}