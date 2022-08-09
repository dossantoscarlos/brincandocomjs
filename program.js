window.onload = function () {
  var  input =  document.querySelector("#recebe")
  var  btnVerifica = document.querySelector("#verifica");

  btnVerifica.addEventListener("click", () => {
    if (input.value > 20) {
      alert("Valor e maior  que  20 => "+ input.value)
    }
  }, false );
}