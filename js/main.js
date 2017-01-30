$(".button-collapse").sideNav();
$(document).ready(function(){
      $('.slider').slider();
      $('.parallax').parallax();
      $('.carousel').carousel();
      $('select').material_select();
});
$("#enviar").click(function(){
  $("confirmacion").fadeOut(3000);
  $("#mensaje").html("Gracias por hacer su solicitud de compra a la brevedad recibirá en un mensaje en su correo con la confirmación de los datos: ");
  var nombre= $("#first_name").val();
  var apellido= $("#last_name").val();
  var email= $("#email").val();
  nom= nombre +" " +apellido;
  $("#nombre").html("Nombre: " + " " +nom);
  $("#correo").html("Email: "+ " " +email);
})
