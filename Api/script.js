
class RegistroService {
    constructor() {
        this.URL = "http://localhost:8080/";
    }

    async registro(idRegistro, email, idMascota, nombre, apellido, password,  telefono){
        await fetch("http://localhost:8080/Registro", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
           id_Registro: idRegistro,
           mail: email,
           id_mascota: idMascota, 
           nombre: nombre,
           apellido: apellido,
           contrasena: password, 
           telefono: telefono
        })
  })
  .then(response => {
    if (response.ok) {
      // La solicitud fue exitosa
      console.log('Datos enviados correctamente');
      return response;
    } else {
      // La solicitud falló
      console.log('Error al enviar los datos');
      return response;
    }
  })
  .catch(e => {
        response.status(500).json(e);
    }) 
    }
}
