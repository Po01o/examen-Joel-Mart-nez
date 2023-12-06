function obtenerParametro(name){
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1]);
}
var edad = obtenerParametro('edad');
var sexo = obtenerParametro('sexo');
var nivel = obtenerParametro('nivel');
var ocupacion = obtenerParametro('ocupacion');
document.getElementById('resultado').innerHTML = '<p>Edad: ' + edad + '</p>' +
'<p>Sexo: ' + sexo + '</p>' + '<p>Nivel: ' + nivel + '</p>' + '<p>Ocupacion: ' + ocupacion + '</p>';