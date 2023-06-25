
$(document).ready(function() {
  $('#consultarHora').submit(function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    const idRegistroLocal = localStorage.getItem("dato");

    consultar(idRegistroLocal); // Llamada a la API para autenticar el Email
  });
});

function consultar(idRegistroLocal) {
  // Solicitud a la API para autenticar el inicio de sesión
  fetch(`http://localhost:8080/ConsultaAgeda?idRegistro=${idRegistroLocal}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
.then(res => res.json())
.then(datos => {
   if (datos.length === 0) {
     alert("usuario no existe ");
    } else {
       var dato = datos[0];
       console.log(datos);  

       let campoEspecialidad = document.querySelector("#especialidad");
       console.log(dato.nombre_Servicio);
       $("#especialidad").val(dato.id_Servicio);

      }
  });
 
}



