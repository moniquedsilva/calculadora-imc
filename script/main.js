function getIMC() {
  let nomeImput = document.getElementById("nome");
  let pesoInput = document.getElementById("peso");
  let alturaInput = document.getElementById("altura");

  let nome = nomeImput.value;
  let peso = parseFloat(pesoInput.value);
  let altura = parseFloat(alturaInput.value);

  let nomeError = document.getElementById("nomeError");
  let pesoError = document.getElementById("pesoError");
  let alturaError = document.getElementById("alturaError");

  nomeError.style.visibility = "hidden";
  pesoError.style.visibility = "hidden";
  alturaError.style.visibility = "hidden";

  let valido = true;

  if (!nome) {
    nomeError.style.visibility = "visible";
    valido = false;
  }

  if (!peso) {
    pesoError.style.visibility = "visible";
    valido = false;
  }

  if (!altura) {
    alturaError.style.visibility = "visible";
    valido = false;
  }

  if (valido) {
    let imc = peso / (altura * altura);
    let classificacao = getClassificacao(imc);

    localStorage.setItem("nome", nome);
    localStorage.setItem("imc", imc.toFixed(2));
    localStorage.setItem("classificacao", classificacao[0]);
    localStorage.setItem("risco", classificacao[1]);

    window.location.href = "pages/resultado.html";
  }
}

function getClassificacao(imc) {
  if (imc < 18.5) {
    return ["Baixo peso", "Baixo"];
  } else if (imc < 25) {
    return ["Peso normal", "Médio"];
  } else if (imc < 30) {
    return ["Pré-obeso", "Aumentado"];
  } else if (imc < 35) {
    return ["Obeso I", "Moderado"];
  } else if (imc < 40) {
    return ["Obeso II", "Grave"];
  } else {
    return ["Obeso III", "Muito grave"];
  }
}

function calcularIMC() {
  getIMC();
}

document.getElementById('calculate').addEventListener('click', getIMC);

document.getElementById('nome').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getIMC();
  }
});

document.getElementById('peso').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getIMC();
  }
});

document.getElementById('altura').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getIMC();
  }
});

function LimparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("nomeError").style.visibility = "hidden";
  document.getElementById("pesoError").style.visibility = "hidden";
  document.getElementById("alturaError").style.visibility = "hidden";
}