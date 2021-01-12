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
    document.CalcFrigorias.resultado.value = resultado;
    return true;
}