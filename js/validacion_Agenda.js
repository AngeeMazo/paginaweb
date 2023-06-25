
$(document).ready(function() { //validacion Agendar hora cliente

$('#guardar').click(function()  {
var idRegistroLocal = localStorage.getItem("dato");

    const nombreEspecialidad = $('#especialidad').val();
    var e =document.getElementById("especialidad");
    const idEspecialidad = e.selectedIndex;
    const nombreEspecialista = $('#especialista').val();
    const fechaAgenda = $('#fechaAgenda').val();
    const horaAgenda = $('#horaAgenda').val();
    const agendarService = new Services();
     
        
        if (fechaAgenda === "") {
          alert("Por favor, selecciona una fecha.");
          return;
        }
        
        if (horaAgenda === "") {
         alert("Por favor, selecciona una hora.");
            return;
          }
      
      agendarService.registroAgenda("2", nombreEspecialidad, nombreEspecialista, idRegistroLocal, fechaAgenda, horaAgenda, idEspecialidad);
    });

    $('#mostraConsulta').click(function() {
      window.location.href = "informacion_paciente";
      window.location.replace('informacion_paciente"'); 

    });

  });

   

    
    
