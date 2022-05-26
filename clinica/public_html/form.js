var input = document.getElementsByClassName('formulario_input');
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
function r(){
    location.href="Inicio.html";
}
function acciónregistrar() {
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;
    if (usuario == "Julio" && contraseña == "roman") {
        alert("HOLA " + usuario);
        
    } else {
        alert("lo siento, vuelva a ingresar bien los datos");
    }
}