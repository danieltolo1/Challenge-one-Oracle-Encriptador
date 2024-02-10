// **************  Funcion para Encriptar  *************************

function BotonEncriptar() {
  const textforEncript = document.getElementById("textArea").value;

  if (textforEncript.length) {
    document.getElementById("MensajeInicial").style.display = "none";
    document.getElementById("DivbtnCopiar").style.display = "flex";
    const resultado = [];

    for (let i of textforEncript) {
      if (i === "a") {
        i = "ai";
      }
      if (i === "e") {
        i = "enter";
      }
      if (i === "i") {
        i = "imes";
      }
      if (i === "o") {
        i = "ober";
      }
      if (i === "u") {
        i = "ufat";
      }

      resultado.push(i);
    }
    document.getElementById("resultadoId").style.display = "grid";
    const final = resultado.join("");
    asignarTextoElemento("p", final);
  } else {
    alert("Debes de escribir el Mensaje para ser encriptado");
  }
}

// *********************   Funcion para desencriptar   *********************

function BotonDesencriptar() {
  const textforEncript = document.getElementById("textArea").value;
  if (textforEncript.length) {
    document.getElementById("MensajeInicial").style.display = "none";
    document.getElementById("DivbtnCopiar").style.display = "flex";
    var codigo = [
      ["a", "ai"],
      ["e", "enter"],
      ["i", "imes"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    let mensaje = textforEncript;

    for (var i = 0; i < codigo.length; i++) {
      if (mensaje.includes(codigo[i][1])) {
        mensaje = mensaje.replaceAll(codigo[i][1], codigo[i][0]);
      }
    }
    document.getElementById("resultadoId").style.display = "grid";

    asignarTextoElemento("p", mensaje);
  } else {
    alert("Debes de escribir el Mensaje para ser encriptado");
  }
}

//******************   Funcion para Agregar al DOM la respuesta    ***********************/

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//****************    Funcion para copiar Texto Cifrado **********************************/

const BotonCopiar = async () => {
  let texto = document.getElementById("TextoResultado").innerHTML;
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Contenido copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
};
