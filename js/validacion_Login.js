document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
   
    const username= $("#username").val();
    const password = $('#password').val();


    if (username === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

  
    // Realiza una solicitud al servidor para verificar las credenciales
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "verificar_login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          alert("Inicio de sesión exitoso. Redirigiendo al panel de control...");
          window.location.href = "panel-de-control.html";
        } else {
          alert("Las credenciales ingresadas no son válidas. Por favor, intenta nuevamente.");
        }
      }
    };
    const params = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    xhr.send(params);
  });
  