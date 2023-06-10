

function registro(idRegistro, email, idMascota, nombre, apellido, password,  telefono){
   
    fetch("http://localhost:8080/Registro", {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
         },
         
          body: JSON.stringify({
            id_Registro: idRegistro,
            mail: email,
            id_Mascota: idMascota, 
            nombre: nombre,
            apellido: apellido,
            contrasena: password, 
            telefono: telefono
        })
  })
  .then(response => response.json())
  .then (data => {
    //registro(data.registro)
    }).catch(e => {
        response.status(500).json(e);
    }) 
}


