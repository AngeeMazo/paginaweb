
$(document).ready(function() { //validacion registro cliente

  $('#Iniciarsesion').click(function() {

    const username= $("#usermail").val();
    const password = $('#password').val();
    const loginServices = new Services();


    if (username === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    loginServices.login( username, password);

  });
});






