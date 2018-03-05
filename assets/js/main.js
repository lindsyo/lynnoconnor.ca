$(document).ready(function(){

  // Show a message
  console.log('I am ready to show!');

  // Attach our portfolio nav to be sticky
  $("#stick").stick_in_parent();


  // Can also be included with a regular script tag

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });

});
