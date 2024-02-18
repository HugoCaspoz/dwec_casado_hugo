document.getElementById('enviar')
        .addEventListener('click',analizarTexto)

function analizarTexto() {
    var textoOriginal = document.getElementById("texto").value;
    var regexFecha = /(\d{2})\/(\d{2})\/(\d{4})/;
  
    function reemplazarFecha(match, p1, p2, p3) {
      var dia = parseInt(p1, 10);
      var mes = parseInt(p2, 10);
      var año = parseInt(p3, 10);
  
      if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12) {
        return `${dia} del ${mes} de ${año}`;
      } else {
        return match;
      }
    }
  
    var textoModificado = textoOriginal.replace(regexFecha, reemplazarFecha);
    document.getElementById("resultado").textContent = textoModificado;
  }
  