$('#form-login').on("submit", function(){
    var usuario = $('#usuario').val()
    alert('Iniciaste sesión con el usuario '+ usuario)
    $("#person").html(usuario)
    $("#login").hide("slow")
    $("#info-login").show("slow")
    return false
  })
  
  $('#cerrar-sesion').on("click", function(){
    $('#usuario').val("")
    $('#password').val("")
    $("#login").show("slow")
    $("#info-login").hide("slow")
  })
  