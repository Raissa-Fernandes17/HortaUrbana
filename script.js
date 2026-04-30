const lista = document.getElementById("lista-alimentos");
const form = document.getElementById("form-alimento");

// tempo de crescimento (dias)
const tempoColheita = {
  "Alface": 45,
  "Tomate": 90,
  "Cenoura": 80,
  "Couve": 60,
  "Cebolinha": 30,
  "Beterraba": 70,
  "Rúcula": 25
};

// carregar do navegador
let alimentos = JSON.parse(localStorage.getItem("horta")) || [];

// renderizar lista
function renderizar() {
  lista.innerHTML = "";

  if (alimentos.length === 0) {
    lista.innerHTML = "<p>• Nenhum alimento cadastrado ainda</p>";
    return;
  }

  alimentos.forEach(item => {
    const p = document.createElement("p");
    p.innerHTML = `• ${item.nome} (${item.horta}) - Colheita: ${item.colheita}`;
    lista.appendChild(p);
  });
}

// adicionar alimento
form.addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const horta = document.getElementById("horta").value;
  const data = document.getElementById("data").value;
  const rega = document.getElementById("rega").value;

  const dias = tempoColheita[nome] || 30;

  const dataPlantio = new Date(data);
  dataPlantio.setDate(dataPlantio.getDate() + dias);

  const colheita = dataPlantio.toLocaleDateString();

  const novo = {
    nome,
    horta,
    rega,
    colheita
  };

  alimentos.push(novo);

  localStorage.setItem("horta", JSON.stringify(alimentos));

  form.reset();
  renderizar();
});

// iniciar sistema
renderizar();