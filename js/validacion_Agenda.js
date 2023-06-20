
$(document).ready(function() { //validacion Agendar hora cliente

$('#guardar').click(function()  {
  
    const nombreEspecialidad = $('#especialidad').val();
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

      
      agendarService.registroAgenda("2", nombreEspecialidad, nombreEspecialista, "19", fechaAgenda, horaAgenda);
           }); });

   

    
    
