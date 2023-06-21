
class Services {
    constructor() {
        this.URL = "http://localhost:8080/Registro";
    }

    async registro( idRegistro, email, nombre, apellido, password,  telefono, nombreMascota, tipoMascota, fechaNacimiento, raza){
        await fetch("http://localhost:8080/Registro", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          id_Registro: idRegistro,
           mail: email,
           nombre: nombre,
           apellido: apellido,
           contrasena: password, 
           telefono: telefono,
           nombre_mascota: nombreMascota,
           tipo_mascota: tipoMascota,
           fecha_nacimiento: fechaNacimiento,
           raza: raza

        })
  })
  .then(response => {
    if (response.ok) {
      // La solicitud fue exitosa
      console.log('Datos enviados correctamente');
      
    } else {
      // La solicitud falló
      console.log('Error al enviar los datos');
     
    }
  })
  .catch(e => {
        response.status(500).json(e);
    }) 
    }
    
    async registroAgenda( idAgenda, nombreServicio, nombreEspecialista, idRegistro, fechaAgenda, horaAgenda){
      await fetch("http://localhost:8080/Agendar", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
       id_Agendar: idAgenda,
       nombre_Servicio: nombreServicio,
       especialista: nombreEspecialista,
       id_Registro: idRegistro,
       fecha: fechaAgenda,
       hora: horaAgenda

      })
})
.then(response => {
  if (response.ok) {
    // La solicitud fue exitosa
    console.log('Datos enviados correctamente');
    
  } else {
    // La solicitud falló
    console.log('Error al enviar los datos');
   
  }
})
.catch(e => {
      response.status(500).json(e);
  }) 
  }


  async login( mail, contrasena){
    await fetch(`http://localhost:8080/Registro?mail=${mail}&contrasena=${contrasena}`, {
    method: 'get',
    headers: {
      "responseType": "json"
    }, 
   
})
.then(response => {
console.log(response);
  
})
.catch(e => {
    response.status(500).json(e);
}) 
}

}
