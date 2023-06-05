window.onload = function () {
  let nome = localStorage.getItem("nome");
  let imc = localStorage.getItem("imc");
  let classificacao = localStorage.getItem("classificacao");
  let risco = localStorage.getItem("risco");

  document.getElementById("nomeResultado").textContent = nome;
  document.getElementById("resultado").textContent = imc;
  document.getElementById("classificacao").textContent = classificacao;
  document.getElementById("risco").textContent = risco;
};

function voltarHome() {
  window.location.href = "../index.html";
}