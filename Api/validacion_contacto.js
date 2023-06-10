function enviarFormulario() {
    var nombre =  document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var datos = {
        nombre:nombre,
        email:email,
        mensaje:mensaje
    };

    // Envío de los datos al servidor
    fetch('/enviar-correo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(function(response) {
        if (response.ok) {
            alert('¡El formulario se ha enviado correctamente!');
            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensaje").value = "";
        } else {
            alert('Ha ocurrido un error al enviar el formulario.');
        }
    })
    .catch(function(error) {
        alert('Ha ocurrido un error al enviar el formulario.');
    });
}