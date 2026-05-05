
const tempoColheita = { "Alface": 45, "Tomate": 90, "Cenoura": 80, "Beterraba": 70 };
const sementesPorMetro = { "Alface": 30, "Tomate": 10, "Beterraba": 20, "Cenoura": 50 };

// Carrega os alimentos do LocalStorage
let alimentos = JSON.parse(localStorage.getItem("horta_final")) || [];

// Captura os elementos das duas telas (se existirem)
const listaPlantio = document.getElementById("lista-alimentos"); // Tela de Plantio
const listaAdmin = document.getElementById("lista-admin-alimentos"); // Tela de Administração
const form = document.getElementById("form-alimento"); // Formulário
const contadorHortas = document.getElementById("contador-hortas"); // Contador da Carla

function renderizarTudo() {
    // 1. LÓGICA PARA A TELA DE PLANTIO (Cards com botão excluir)
    if (listaPlantio) {
        listaPlantio.innerHTML = "";
        if (alimentos.length === 0) {
            listaPlantio.innerHTML = "<p class='vazio'>• Nenhum alimento cadastrado ainda</p>";
        } else {
            alimentos.forEach((item, index) => {
                const card = document.createElement("div");
                card.style.background = "#fff";
                card.style.borderLeft = "5px solid #2ecc71";
                card.style.padding = "10px";
                card.style.marginBottom = "10px";
                card.style.borderRadius = "5px";
                card.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";

                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong style="color: #2e7d32;">${item.nome}</strong> (${item.horta})<br>
                            <small>🌱 ${item.sementes} sementes | 📅 Colheita: ${item.colheita}</small>
                        </div>
                        <button onclick="removerItem(${index})" style="color:red; border:none; background:none; cursor:pointer; font-weight:bold;">X</button>
                    </div>
                `;
                listaPlantio.appendChild(card);
            });
        }
    }

    // 2. LÓGICA PARA A TELA DE ADMINISTRAÇÃO (Lista simples da Carla)
    if (listaAdmin) {
        listaAdmin.innerHTML = "";
        const hortasUnicas = new Set();

        if (alimentos.length === 0) {
            listaAdmin.innerHTML = "<p>• Nenhum alimento no sistema.</p>";
        } else {
            alimentos.forEach(item => {
                const p = document.createElement("p");
                p.innerHTML = `• <b>${item.nome}</b> (${item.horta})`;
                listaAdmin.appendChild(p);
                hortasUnicas.add(item.horta);
            });
        }

        // Atualiza o contador de hortas ativas se o elemento existir
        if (contadorHortas) {
            contadorHortas.innerText = `Total: ${hortasUnicas.size} hortas em funcionamento.`;
        }
    }
}


if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const horta = document.getElementById("horta").value;
        const area = parseFloat(document.getElementById("area").value);
        const dataInput = document.getElementById("data").value;

        const diasParaColheita = tempoColheita[nome] || 45;
        const dataC = new Date(dataInput + 'T00:00:00');
        dataC.setDate(dataC.getDate() + diasParaColheita);

        const novoPlantio = {
            nome,
            horta,
            sementes: Math.ceil(area * (sementesPorMetro[nome] || 20)),
            colheita: dataC.toLocaleDateString('pt-BR')
        };

        alimentos.push(novoPlantio);
        localStorage.setItem("horta_final", JSON.stringify(alimentos));
        
        form.reset();
        renderizarTudo();
    });
}


window.removerItem = (index) => {
    alimentos.splice(index, 1);
    localStorage.setItem("horta_final", JSON.stringify(alimentos));
    renderizarTudo();
};



// Inicializa ao carregar a página
renderizarTudo();
