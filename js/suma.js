function sumar(){
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);

    var resultado = v1 + v2;

    document.getElementById("resultado").value = resultado;
}