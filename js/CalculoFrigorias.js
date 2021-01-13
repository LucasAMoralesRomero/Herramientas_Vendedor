//funcion dos decimales por Pablo Lozano: perfil StackOverflow:https://es.stackoverflow.com/users/22851/pablo-lozano
function dosDecimales(n) { 
    let t=n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }
function calcularFrigorias(){
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    auxiliar = 0;
    resultado =0;
    if (largo == "")
    {
        alert('>ALERTA< El campo Largo no debe estar vacio');
        return false;
    }
    else if(ancho == "")
    {
        alert('>ALERTA< El campo Ancho no debe estar vacio');
        return false;
    }
    else if(alto == "")
    {
        alert('>ALERTA< El campo Alto no debe estar vacio');
    }
    auxiliar = (largo * ancho) * alto;
    resultado = auxiliar * 50;
    resultado=dosDecimales(resultado); //funcion que trunca en dos decimales (tomado de Stack Overflow:https://es.stackoverflow.com/questions/108268/c%C3%B3mo-truncar-un-numero-a-2-decimales-en-javascript respuesta 4 pablo lozano)
    document.CalcFrigorias.resultado.value = resultado;
    return true;
}
