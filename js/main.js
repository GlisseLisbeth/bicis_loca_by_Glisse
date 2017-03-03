function validateForm(){

  /* Escribe tú código aquí */
  var elementos = document.getElementsByTagName('input');
  var alerta = document.getElementsByName('alert');
  var seleccion = document.getElementsByTagName("select")[0];
  //Todos los campos son obligatorios, excepto los dos últimos.
  var obligatorio = [];
  var dim = elementos.length-3;

  for( var i in elementos ){
      if(i<=dim) {obligatorio.push(elementos[i]);}
      else{ break;}
  }

  if(obligatorio.find(encontrarVacios)){
    alertaMensaje(mensajeVacio);
  }
  else{
    for( var i = 0 ; i <2 ; i++){
      if(caracterLetras(elementos[i].value.toString())==-1){
          alertaMensaje(mensajeErrorLetras);
      }
      else {
         elementos[i].value= textoCapital(elementos[i].value.toString().toLowerCase());
      }
    }

    if(caracterCorreo(elementos[2].value.toString())==-1){
        alertaMensaje(mensajeErrorCorreo);
    }
    if(passwordNoPermitidos(elementos[3].value.toString())){
        alertaMensaje(mensajeErrorPassword);
    }
    if (seleccion.value == 0){

        alertaMensaje(mensajeErrorSeleccion);
    }
  }
  //FUNCIONES DE VALIDACIONES
  //funcion que verifican las validaciones
  function encontrarVacios(elemento){
    return elemento.value == "";
  }
  //Funcion que solo permite ingresar caracteres de la A a la Z
  function caracterLetras(elemento){
    return elemento.search(/^[a-zA-Z]*$/);
  }
  //Funcion que reescribe a Capital en caso de que no esta bien escrito
  function textoCapital(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
  }
  //Funcion que solo permite ingresar caracteres del correo electronico
  function caracterCorreo(elemento){
    return elemento.search(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);
  }
  //Funcion que solo permite ingresar al menos 6 caracteres y no puede ser igual a "password" o "123456" o "098754"
  function passwordNoPermitidos(elemento){
    return ((elemento.search(/.{6,}/) ==-1) || elemento == "password" || elemento == "123456" || elemento == "098754");
  }

  //Funcion alertaMensaje: Funcion compuesta por callback mensajeFuncion y el setTimeout
  function alertaMensaje(mensajeFuncion){
      setTimeout(alert(mensajeFuncion()),3000);
  }
  //Funcion retorna mensajes, esta funcion me retorna un valor definido de string
  function mensajeVacio(){
    return "Campos obligatorios";
  }

  function mensajeErrorLetras(){
    return "Ingrese solo letras";
  }
  function mensajeErrorCorreo(){
    return "Verifique su correo";
  }
  function mensajeErrorPassword(){
    return "Verifique su password";
  }
  function mensajeErrorSeleccion(){
    return "Seleccione una opcion";
  }
}
