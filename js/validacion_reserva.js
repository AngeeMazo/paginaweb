

$(document).ready(function () { //validacion agendar hora cliente
    
    const nombreApellido = $("#nombreApellidol").val();
    const email = $('#email').val();
    const apellido = $('#apellido').val();
    const telefono = $('#telefono').val();
    const password = $('#password').val();
    const nombreMascota = $('#nombreMascota').val();
    const tipoMascota = $('#tipoMascota').val();
    const raza = $('#raza').val();

    $('#guardar').click(function () {

        if (nombreApellido.trim().length === 0) {
            alert("Debe ingresar un Nombre");
        }
        
        if (email.trim().trim().length === 0) {
            alert("Debe ingresar un Correo Electronico");
         }

        if (email.trim().indexOf('@', 0) == -1 || email.trim().indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }
       
    });

    
 
});
